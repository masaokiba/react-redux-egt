import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';

import PlayersWorkedWith from '../PlayersWorkedWith/PlayersWorkedWith';
import Logos from '../Logos/Logos';
import MainProduct from '../MainProduct/MainProduct';
import Guarantee from 'universal/components/Guarantee/Guarantee';
import WhatToExpect from '../WhatToExpect/WhatToExpect';
import CallToAction from '../CallToAction/CallToAction';
import Attention from 'universal/components/Attention/Attention';
import Section from 'universal/components/Section/Section';
import SimpleWorkout from '../SimpleWorkout/SimpleWorkout';

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
    lineHeight: '1em'
  },
  justFourWeeks: {
    fontWeight: accuBlack
  }
}

export default class LongSale extends Component {
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
      originalPrice,
      salePrice,
      discount,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
      betweenOffers,
      afterOffers,
      dispatch,
      productId,
      abandonListId,
      email,
      videoId,
      countdownText,
      affiliate,
      abandoned,
      createdAsAbandon,
      jumpType,
      experiments
    } = this.props;

    return (
      <div>

        <Attention pureText>
          <span style={styles.small}>How To Gain</span> <br/>
          <span style={styles.bigger}>Blazing-Fast First Step Speed And Shocking Off-The-Dribble<br/>
          Explosiveness In 4 Weeks Or Less</span>
        </Attention>

        <MainProduct bgColor={bgGrey} arrowDown={orange}/>
        <Logos/>

        <Attention pureText>
          HERE&#8217;S WHAT YOU CAN EXPECT...<br/>
          <span style={styles.justFourWeeks}>JUST 4 WEEKS FROM TODAY</span>
        </Attention>

        <Section arrowDown={orange} even>
          <WhatToExpect />
        </Section>

        <SimpleWorkout />

        <PlayersWorkedWith/>
        <Guarantee/>

        <CallToAction dispatch={dispatch}
          originalPrice={originalPrice}
          salePrice={salePrice}
          discount={discount}
          productId={productId}
          abandonListId={abandonListId}
          email={email}
          addToCart={this.addToCartBottom}
        />

      </div>
    );
  }
}
