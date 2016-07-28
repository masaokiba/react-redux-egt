import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import Logos from 'universal/components/Logos/Logos';
import MainProduct from '../MainProduct/MainProduct';
import UpsellProducts from '../UpsellProducts/UpsellProducts';
import Guarantee from 'universal/components/Guarantee/Guarantee';
import CallToAction from '../CallToAction/CallToAction';
import Attention from 'universal/components/Attention/Attention';
import Section from 'universal/components/Section/Section';
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton';
import {orange, bgGrey, lightGrey, black, grey} from 'universal/styles/colors';
import {accuBold, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from 'universal/ducks/abandon';
import {track, gaIdentify, page} from 'universal/utils/analytics';

const styles = {
  attentionButton: {
    maxWidth: 400,
    marginTop: '.4em'
  },
  small: {
    color: black,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(70 - 20, 16)}rem`,
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(70 - 10, 16)}rem`,
    },
    '@media (min-width: 992px)': {
      fontSize: `${pxToEm(70, 16)}rem`,
    }
  },
  bigger: {
    textTransform: 'uppercase',
    lineHeight: '1em',
    fontSize: `${pxToEm(130)}rem`,
  },
  justFourWeeks: {
    fontWeight: accuBlack
  },
  black: {
    color: black
  }
}

export default class Upsell extends Component {
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
    afterOffers: PropTypes.bool,
    checkout: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      dispatch,
      productId,
      originalPrice,
      abandonListId,
      experiments,
      email,
      upsellProducts,
      cart,
      checkout
    } = this.props;

    let salePrice = cart.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);

    const disabled = salePrice === 0 ? true : false;

    return (
      <div>

        <Attention >
          One Last Chance <span style={styles.black}>To Claim Your Discount Packages <br/>
          Before They Get Locked Back Up For Good</span>
        </Attention>

        <MainProduct bgColor={bgGrey} arrowDown={orange}/>

        <Section arrowDown={lightGrey} padding='5rem 0 0 0'>
          <UpsellProducts products={upsellProducts} dispatch={dispatch} cart={cart}/>
        </Section>

        <CallToAction dispatch={dispatch}
          originalPrice={originalPrice}
          salePrice={salePrice}
          discount={0}
          productId={productId}
          abandonListId={abandonListId}
          email={email}
          checkout={checkout}
          disabled={disabled}
        />
        <Guarantee/>

      </div>
    );
  }
}
