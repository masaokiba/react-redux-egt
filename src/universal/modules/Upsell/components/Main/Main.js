import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import UpsellBigTextIntro from '../UpsellIntro/UpsellBigTextIntro';
import Upsell from './Upsell';

import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from 'universal/ducks/abandon';
import {track, page, ADDED_TO_CART, UPSELL_PAGE} from 'universal/utils/analytics';
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
    UpsellPrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    dispatch: PropTypes.func,
    UpsellProductId: PropTypes.string,
    abandonListId: PropTypes.number,
    email: PropTypes.string,
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  checkout = () => {
    const {
      email, abandonListId,
      experiments, dispatch, leadId, cart
    } = this.props;

    let productId = cart.reduce((params, product) => {
      return params === '' ? product.productId : `${params},${product.productId}`;
    }, '')

    let checkoutUrl = `/checkout/?id=${productId}`;
    if (leadId) {
      let leadQuery = `&userId=${leadId}`;
      checkoutUrl = `${checkoutUrl}${leadQuery}`;
    }

    track(ADDED_TO_CART, {
       checkoutUrl,
       userId: leadId
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
      UpsellPrice, salePrice, abandoned, affiliate, betweenOffers,
      afterOffers, offerTimeRemaining, duringReopenOffer, duringInitialOffer,
      leadId, experiments
    } = this.props;

    let gaProduct = `4WFS Upsell`;

    // const experimentVariation = experiments.get(optionsExperiment);
    // track(VIEWED_EXPERIMENT, {optionsExperiment, experimentVariation});

    page(UPSELL_PAGE, {
      gaProduct
    });

  }

  render() {
    const {
      experiments
    } = this.props;

    // let experimentVariation = experiments.get(experimentName);

    return (
      <div>
        <UpsellBigTextIntro/>
        <Upsell {...this.props} checkout={this.checkout}/>
      </div>
    );
  }
}
