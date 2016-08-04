import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {orange, white, black, grey} from 'universal/styles/colors';
import {headerStack, accuBold, accuMed, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton';
import shallowCompare from 'react-addons-shallow-compare';
import VisibilitySensor from 'react-visibility-sensor';
import {track, SCROLLED_TO_CALL_TO_ACTION} from 'universal/utils/analytics';

import productImg from 'universal/images/downsell-product-shot.png';
import leftRightArrows from './images/left-right-arrows.png';

const baseFontSize = 65;

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize * .5, 16)}rem`,
    paddingTop: `${pxToEm(47, baseFontSize)}em`,
    paddingBottom: `${pxToEm(47, baseFontSize)}em`,
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
  price: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: `1.2em`,
    color: orange,
    textAlign: 'center',
    marginTop: '0',
    marginBottom: `.2em`,
    textTransform: 'uppercase',
    lineHeight: '.91em'
  },
  todaysprice: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `1em`,
    color: black,
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: '.5em',
    marginTop: '.5em'
  },
  discount: {
    fontFamily: headerStack,
    fontWeight: accuMed,
    fontSize: `1em`,
    color: black,
    textAlign: 'center',
    marginBottom: 0,
    textTransform: 'uppercase',
    lineHeight: '.85em',
    marginTop: '.5em'
  },
  span: {
    color: orange,
    fontSize: '1.25em',
    fontWeight: accuBlack
  },
  ctaContainer: {
    maxWidth: 604,
    backgroundImage: `url(${leftRightArrows})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 1.25em',
    backgroundSize: 'contain',
    margin: '0 auto'
  },
  ctaContainerFullPrice: {
    maxWidth: 604,
    backgroundImage: `url(${leftRightArrows})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 .5em',
    backgroundSize: 'contain',
    margin: '0 auto'
  },
  img: Object.assign({}, centerBlock, imgResponsive)
};

@Radium
export default class CallToAction extends Component {
  static propTypes = {
    salePrice: PropTypes.number.isRequired,
    checkout: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      abandonListId,
      productId,
      dispatch,
      email,
      checkout,
      disabled,
      salePrice
    } = this.props;

    const visibilityChange = (isVisible) => {
      isVisible && track(SCROLLED_TO_CALL_TO_ACTION);
    };

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12}>
              <VisibilitySensor onChange={visibilityChange}>
                <div style={styles.ctaContainerFullPrice}>
                  <h2 style={styles.todaysprice}>
                    Your Total Is <br/>
                    <span style={styles.span}>&#36;{salePrice}</span>
                  </h2>
                  <AddToCartButton
                    productId={productId}
                    abandonListId={abandonListId}
                    dispatch={dispatch}
                    email={email}
                    addToCart={checkout}
                    securePayments
                    cards
                    text="Check Out Now"
                    disabled={disabled}
                  />
                </div>
              </VisibilitySensor>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
