import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import ProductIntro from '../ProductIntro/ProductIntro';
import Presale from './Presale';
import FloatingCountdown from 'universal/components/FloatingCountdown/FloatingCountdown';
import SaleEnded from 'universal/components/SaleEnded/SaleEnded';
import BeforeSale from 'universal/components/BeforeSale/BeforeSale';

import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from 'universal/ducks/abandon';
import {track, page, ADDED_TO_CART, PRESALE_PAGE} from 'universal/utils/analytics';

const styles = {
  attentionButton: {
    maxWidth: 400,
    marginTop: '.4em'
  }
}

export default class AlanJumpRope extends Component {
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

  componentDidMount() {
    const {
      originalPrice,
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      experiments
    } = this.props;


    page(PRESALE_PAGE, {
      pageVariation: 'first-step-teaser',
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
    });

  }

  render() {
    const {
      jumpType,
      offerTimeRemaining,
      beforeOffer,
      betweenOffers,
      countdownText,
      abandoned,
      affiliate,
      createdAsAbandon,
      experiments,
      reopen,
      reopenTwo
    } = this.props;
    const videoId = "nod1p8d6a6";

    const showTimeRemaining = !abandoned && !affiliate && !createdAsAbandon && offerTimeRemaining;
    const showZeroTimeRemaining = !abandoned && !affiliate && !createdAsAbandon && betweenOffers;
    const showSaleEnded = !abandoned && !affiliate && !createdAsAbandon && betweenOffers;

    return (
      <div>

        <ProductIntro videoId={videoId} jumpType={jumpType}/>

        <Presale {...this.props} addToCart={this.addToCart}/>

        {showTimeRemaining ? <FloatingCountdown timeRemaining={offerTimeRemaining} text={countdownText}/> : null}
        {showZeroTimeRemaining ? <FloatingCountdown timeRemaining={0} text={countdownText}/> : null}
        {showSaleEnded ? <SaleEnded/> : null}

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
