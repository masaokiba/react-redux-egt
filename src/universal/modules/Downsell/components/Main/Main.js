import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import DownsellBigTextIntro from '../DownsellIntro/DownsellBigTextIntro';
import Downsell from './Downsell';

import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from 'universal/ducks/abandon';
import {track, page, ADDED_TO_CART, DOWNSELL_PAGE} from 'universal/utils/analytics';
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
    downsellPrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    dispatch: PropTypes.func,
    downsellProductId: PropTypes.string,
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
      experiments, dispatch, leadId
    } = this.props;

    let checkoutUrl = `/checkout/?id=${productId}`;
    if (leadId) {
      let leadQuery = `&userId=${leadId}`;
      checkoutUrl = `${checkoutUrl}${leadQuery}`;
    }

    track(ADDED_TO_CART, {
      salePrice, checkoutUrl,
      buttonPosition, userId: leadId
    });

    if (email) {
      const data = {
        email,
        abandonListId,
        productId
      };

      const contactQuery = `&contact=${this.props.email}`;
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`;
      }

      // addToAbandonList(this.props.dispatch, data);
    }

    // const experimentVariation = experiments.get(optionsExperiment);

    // switch (experimentVariation) {
    //   case NO_OPTIONS:
    //     return document.location = checkoutUrl;
    //   case OPTIONS_SHORT:
    //   case OPTIONS_LONG:
    //     return dispatch(push('/options'));
    //   default:
    //     return document.location = checkoutUrl;
    // }

    return document.location = checkoutUrl;

  };

  componentDidMount() {
    const {
      downsellPrice, salePrice, abandoned, affiliate, betweenOffers,
      afterOffers, offerTimeRemaining, duringReopenOffer, duringInitialOffer,
      leadId, experiments
    } = this.props;

    let gaProduct = `4WFS Downsell`;

    // const experimentVariation = experiments.get(optionsExperiment);
    // track(VIEWED_EXPERIMENT, {optionsExperiment, experimentVariation});

    page(DOWNSELL_PAGE, {
      gaProduct
    });

  }

  render() {
    const {
      videoId, jumpType, experiments
    } = this.props;

    // let experimentVariation = experiments.get(experimentName);

    return (
      <div>
        <DownsellBigTextIntro/>
        <Downsell {...this.props} addToCart={this.addToCart}/>
      </div>
    );
  }
}
