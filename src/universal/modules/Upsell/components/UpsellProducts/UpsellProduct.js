import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {orange, white, black, bgGrey, darkGrey, grey} from 'universal/styles/colors';
import {headerStack, bodyStack, proxReg, proxSemiBold, accuBold, accuBlack, accuMed} from 'universal/styles/fonts';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import Section from 'universal/components/Section/Section';
import Checklist from 'universal/components/Checklist/Checklist';
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton';
import {addProductToCart, removeProductFromCart, isProductInCart} from 'universal/ducks/cart';

import img from './images/Screen-1.png';

const baseFontSize = 17;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    textAlign: 'center',
    borderRight: `2px solid ${darkGrey}`
  },
  h3: {
    fontFamily: headerStack,
    fontWeight: accuMed,
    color: black,
    fontSize: `${pxToEm(35, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.25em',
    marginTop: '.25em',
    lineHeight: '1em',
    verticalAlign: 'inline',
    minHeight: '2.5em'
  },
  h2: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: `${pxToEm(32, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '0',
    lineHeight: '1em',
    color: grey
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '0',
    lineHeight: '1em',
    color: orange
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  p: {
    fontFamily: bodyStack,
    textAlign: 'left',
    fontSize: '1em'
  },
  normalPrice: {
    color: darkGrey,
    fontSize: `${pxToEm(35, baseFontSize)}em`,
    fontWeight: accuBold,
    fontFamily: headerStack,
    lineHeight: '2em',
    textTransform: 'uppercase',
    verticalAlign: 'middle'
  },
  oldPrice: {
    textDecoration: 'line-through'
  },
  salePriceText: {
    color: black,
    fontSize: `${pxToEm(45, baseFontSize)}em`,
    fontWeight: accuBold,
    fontFamily: headerStack,
    lineHeight: '1em',
    marginBottom: 0,
    textTransform: 'uppercase',
    marginTop: 0
  },
  salePrice: {
    color: orange,
    fontSize: `${pxToEm(70, baseFontSize)}em`,
    fontWeight: accuBold,
    fontFamily: headerStack,
    lineHeight: '.8em',
    marginTop: 0,
    textTransform: 'uppercase'
  },
  button: {
    maxWidth: '100%',
    width: 150,
    fontSize: '1.25em',
    marginTop: '.5em',
    '@media (min-width: 320px)': {
      width: '125px',
      fontSize: '1em'
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
      width: '125px',
      fontSize: '1.25em'
    },
    '@media (min-width: 992px)': {
      width: 175,
      fontSize: '2em'
    },
    '@media (min-width: 1200px)': {
      width: 250,
    }
  }
};

@Radium
export default class UpsellProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  addToCart = () => {
    const {
      productId, salePrice, dispatch
    } = this.props;

    dispatch(addProductToCart({productId, salePrice}));
  };

  removeFromCart = () => {
    const {
      productId, dispatch
    } = this.props;

    dispatch(removeProductFromCart({productId}));
  };

  render() {
    const {
      img,
      subtitle,
      title,
      lead,
      includes,
      subheadline,
      normalPrice,
      salePrice,
      // addedToCart,
      last,
      productId,
      cart
    } = this.props;

    let addedToCart = cart.filter((product) => {
      return product.productId === productId
    }).length > 0

    let sectionStyle = styles.section;
    if (last) {
      sectionStyle = Object.assign({}, sectionStyle, {
        borderRight: 0
      });
    }

    return (
      <div style={sectionStyle}>
        <h2 style={styles.h2}>{subtitle}</h2>
        <h1 style={styles.h1}>{title}</h1>
        <h3 style={styles.h3}>{lead}</h3>
        <img style={styles.img} src={img} alt=""/>
        <p style={styles.p}>
          <strong>{subheadline}</strong>
        </p>
        <Checklist items={includes} padding="4px 0 4px 50px" backgroundPosition="20px 6px" textAlign="left" minHeight="170px"/>
        <h2 style={styles.normalPrice}>Normal Price <span style={styles.oldPrice}>${normalPrice}</span></h2>
        <h2 style={styles.salePriceText}>Sale Price</h2>
        <h1 style={styles.salePrice}>Only ${salePrice}</h1>
          <AddToCartButton
            addToCart={addedToCart ? this.removeFromCart : this.addToCart}
            circle={false}
            cards={false}
            text='Add To Cart'
            activeText='Item Added'
            small
            buttonStyles={styles.button}
            active={addedToCart}
          />
      </div>
    );
  }
}
