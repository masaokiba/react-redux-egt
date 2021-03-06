import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import ProductIntro from '../ProductIntro/ProductIntro';
import LongSale from './LongSale';

import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from 'universal/ducks/abandon';
import {track, page, ADDED_TO_CART, PROMO_PAGE, VIEWED_EXPERIMENT} from 'universal/utils/analytics';
import {experimentName as optionsExperiment,
  NO_OPTIONS, OPTIONS_LONG, OPTIONS_SHORT} from 'universal/experiments/optionsPageExperiment';

const styles = {
  attentionButton: {
    maxWidth: 400,
    marginTop: '.4em'
  }
}

export default class Main extends Component {
  static propTypes = {
    initialOfferStartDate: ValidatorPropTypes.date,
    initialOfferEndDate: ValidatorPropTypes.date,
    reopenOfferStartDate: ValidatorPropTypes.date,
    reopenOfferEndDate: ValidatorPropTypes.date,
    originalPrice: PropTypes.number,
    salePrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    dispatch: PropTypes.func,
    productId: PropTypes.string,
    abandonListId: PropTypes.number,
    email: PropTypes.string,
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  addToCart = (buttonPosition) => {
    const {
      email, abandonListId, productId, originalPrice, salePrice,
      abandoned, affiliate, betweenOffers, afterOffers, offerTimeRemaining,
      duringReopenOffer, duringInitialOffer, leadId, experiments, dispatch
    } = this.props;

    let checkoutUrl = `/checkout/?id=${productId}`;
    if (leadId) {
      const leadQuery = `&userId=${leadId}`;
      checkoutUrl = `${checkoutUrl}${leadQuery}`;
    }

    if (abandoned) {
      const abandonedQuery = `&special=ab`;
      checkoutUrl = `${checkoutUrl}${abandonedQuery}`;
    }

    let optionsUrl = '/options';
    if (abandoned) {
      const optionsAbandonedQuery = `?special=ab`;
      optionsUrl = `${optionsUrl}/${optionsAbandonedQuery}`;
    }

    track(ADDED_TO_CART, {
      salePrice, abandoned, affiliate, betweenOffers, afterOffers,
      offerTimeRemaining, duringInitialOffer, duringReopenOffer, checkoutUrl,
      buttonPosition, userId: leadId
    });

    if (email) {
      const data = {
        email,
        abandonListId,
        productId
      };

      // const contactQuery = `&contact=${this.props.email}`;
      // if (contactQuery) {
      //   checkoutUrl = `${checkoutUrl}${contactQuery}`;
      // }

      addToAbandonList(this.props.dispatch, data);
    }

    const experimentVariation = experiments.get(optionsExperiment);

    switch (experimentVariation) {
      case NO_OPTIONS:
        return document.location = checkoutUrl;
      case OPTIONS_SHORT:
      case OPTIONS_LONG:
        return dispatch(push(optionsUrl));
      default:
        return document.location = checkoutUrl;
    }

  };

  componentDidMount() {
    const {
      originalPrice, salePrice, abandoned, affiliate, betweenOffers,
      afterOffers, offerTimeRemaining, duringReopenOffer, duringInitialOffer,
      leadId, experiments
    } = this.props;

    let gaProduct = `4WFS`;
    if (salePrice === originalPrice) {
      gaProduct = `${gaProduct} ${originalPrice}`;
    } else {
      gaProduct = `${gaProduct} ${salePrice}`;
    }
    if (duringReopenOffer) {
      gaProduct = `${gaProduct} Reopen`;
    }
    if (abandoned) {
      gaProduct = `${gaProduct} Abandon`;
    }
    if (affiliate) {
      gaProduct = `${gaProduct} Aff`;
    }

    const experimentVariation = experiments.get(optionsExperiment);
    track(VIEWED_EXPERIMENT, {optionsExperiment, experimentVariation});

    page(PROMO_PAGE, {
      salePrice, abandoned, affiliate, betweenOffers, afterOffers,
      offerTimeRemaining, duringInitialOffer, duringReopenOffer, gaProduct
    });

  }

  render() {
    const {
      videoId, jumpType, experiments
    } = this.props;

    // let experimentVariation = experiments.get(experimentName);

    return (
      <div>
        <ProductIntro videoId={videoId} jumpType={jumpType}/>
        <LongSale {...this.props} addToCart={this.addToCart}/>
      </div>
    );
  }
}


// {!experimentVariation ?
//   <LongSale {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === CONTROL ?
//   <LongSale {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === SHORT_V1 ?
//   <ShortSaleOne {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === SHORT_V2 ?
//   <ShortSaleTwo {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === SHORT_V3 ?
//   <ShortSaleThree {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === SHORT_V4 ?
//   <ShortSaleFour {...this.props} addToCart={this.addToCart}/> : null
// }

// {experimentVariation === SHORT_V5 ?
//   <ShortSaleFive {...this.props} addToCart={this.addToCart}/> : null
// }
