import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {orange, white, black, grey} from 'universal/styles/colors';
import {headerStack, accuBold, accuMed, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import OrangeButton from 'universal/components/AddToCartButton/OrangeButton';
import shallowCompare from 'react-addons-shallow-compare';

import OptionsImg from '../../images/PRODUCT-SHOT.png';
import leftRightArrows from './images/left-right-arrows.png';
import secure from './images/option_secure.png';
import selectThisButton from './images/playerschoose.png'

const baseFontSize = 48;

const styles = {
  div: {
    fontSize: `${pxToEm(baseFontSize * .5, 16)}rem`,
    '@media (min-width: 375px)': {
      fontSize: `${pxToEm(baseFontSize * .65, 16)}rem`,
    },
    '@media (min-width: 414px)': {
      fontSize: `${pxToEm(baseFontSize * .75, 16)}rem`,
    },
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    }
  },
  h3: {
    fontFamily: headerStack,
    fontWeight: accuMed,
    fontSize: `${pxToEm(45, baseFontSize)}em`,
    color: grey,
    textAlign: 'center',
    marginTop: '.5em',
    marginBottom: `0`,
    textTransform: 'uppercase',
    lineHeight: '1em'
  },
  h2: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `1em`,
    color: black,
    textAlign: 'center',
    marginTop: '0',
    marginBottom: `0`,
    textTransform: 'uppercase',
    lineHeight: '.9em'
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: `${pxToEm(60, baseFontSize)}em`,
    textAlign: 'center',
    marginTop: '0',
    marginBottom: `.25em`,
    textTransform: 'uppercase',
    lineHeight: '.8em',
    paddingBottom: '.25em',
    paddingTop: '.1em'
  },
  span: {
    color: orange
  },
  ctaContainer: {
    maxWidth: 666,
    backgroundImage: `url(${leftRightArrows})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 .4em',
    backgroundSize: 'contain',
    margin: '0 auto'
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  secureImg: Object.assign({}, centerBlock, imgResponsive, {
    marginTop: '1em'
  }),
  half: {
    float: 'left',
    position: 'relative',
    minHeight: 1,
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  selectThisButton: {
    position: 'absolute',
    right: '10%',
    top: -90
  }
};

@Radium
export default class CallToAction extends Component {
  static propTypes = {
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    addToCartVip: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      originalPrice,
      salePrice,
      discount,
      addToCart,
      addToCartVip,
      showLogo,
      old
    } = this.props;

    return (
      <div style={styles.div}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <div style={styles.ctaContainer}>

                <h2 style={styles.h2}>
                  Get Instant Access Now
                </h2>
                <h1 style={styles.h1}>
                  Select An Option to Begin
                </h1>

              </div>
            </Col>
          </Row>
          <Row>

            <div style={styles.half}>
              <OrangeButton
                addToCart={addToCart}
                text={`Basic Training - $${salePrice}`}
                small
              />
            </div>

            <div style={styles.half}>
              <img style={styles.selectThisButton} src={selectThisButton} alt="" />
              <OrangeButton
                addToCart={addToCartVip}
                text={`VIP Training - $${salePrice}`}
                small
              />
            </div>

          </Row>
          <Row>
            <Col xs={12}>
              <img style={styles.secureImg} src={secure} alt="Secure Checkout"/>
            </Col>
          </Row>
          {showLogo ? <Row>
            <Col xs={12}>
              <img style={styles.img} src={showLogo} alt="Logo"/>
            </Col>
          </Row> : null}
        </Grid>
      </div>
    );
  }
}
