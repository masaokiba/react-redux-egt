import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import Logos from 'universal/components/Logos/Logos';
import MainProduct from '../MainProduct/MainProduct';
import DownsellProducts from '../DownsellProducts/DownsellProducts';
import Guarantee from 'universal/components/Guarantee/Guarantee';
import CallToAction from '../CallToAction/CallToAction';
import Attention from 'universal/components/Attention/Attention';
import Section from 'universal/components/Section/Section';
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton';
import {orange, bgGrey, lightGrey, black} from 'universal/styles/colors';
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
  }
}

export default class Downsell extends Component {
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
    addToCart: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  addToCartTop = () => {
    return this.props.addToCart('top');
  }

  addToCartMiddle = () => {
    return this.props.addToCart('middle');
  }

  addToCartBottom = () => {
    return this.props.addToCart('bottom');
  }

  render() {
    const {
      dispatch,
      productId,
      originalPrice,
      salePrice,
      abandonListId,
      experiments,
      email
    } = this.props;

    return (
      <div>

        <Attention pureText>
          <span style={styles.bigger}>For just $4!</span>
        </Attention>

        <MainProduct bgColor={bgGrey} arrowDown={orange}/>
        <Logos/>

        <Attention>
          Add Any Of These Drills To Your Current Workouts <br/>
          For An Immediate Increase In First Step Explosiveness
        </Attention>

        <DownsellProducts/>

        <Guarantee/>

        <CallToAction dispatch={dispatch}
          originalPrice={originalPrice}
          salePrice={salePrice}
          discount={0}
          productId={productId}
          abandonListId={abandonListId}
          email={email}
          addToCart={this.addToCartBottom}
        />

      </div>
    );
  }
}
