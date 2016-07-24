import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, bgGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, proxReg, proxSemiBold, accuBold, accuBlack} from 'universal/styles/fonts';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

import guarantee from './images/guarantee.png';
import guaranteeDark from './images/guaranteeDark.png';


const baseFontSize = 16;

const stylesLight = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop:  `${pxToEm(38, baseFontSize)}em`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: white,
    backgroundColor: orange,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },
  h1: {
    color: white,
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(47, baseFontSize)}em`,
    textTransform: 'uppercase',
    marginBottom: '0',
    lineHeight: '1em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(36, baseFontSize)}em`,
    }
  },
  p: {
    marginTop: '.5em',
    marginBottom: 0
  },
  img: Object.assign({}, centerBlock, imgResponsive)
};

const stylesDark = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop:  `${pxToEm(38, baseFontSize)}em`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: white,
    backgroundColor: black,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },
  h1: {
    color: white,
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(47, baseFontSize)}em`,
    textTransform: 'uppercase',
    marginBottom: '0',
    lineHeight: '1em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(36, baseFontSize)}em`,
    }
  },
  p: {
    marginTop: '.5em',
    marginBottom: 0
  },
  img: Object.assign({}, centerBlock, imgResponsive)
};

@Radium
export default class Guarantee extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {theme} = this.props;
    let styles = stylesLight;
    let img = guarantee;

    if (theme === 'dark') {
      styles = stylesDark;
      img = guaranteeDark;
    }

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12} lg={10} lgOffset={1} >

              <Grid fluid>
                <Row>
                  <Col xs={12} sm={2}>
                    <img style={styles.img} src={img} alt=""/>
                  </Col>
                  <Col xs={12} sm={10}>
                    <h1 style={styles.h1}>You’re fully protected by our 365 day guarantee</h1>
                    <p style={styles.p}>"As always, you're fully protected by our one year money-back guarantee. Feel safe and secure as you customize your order, knowing that you can get a full refund on any or all parts of your purchase."</p>
                  </Col>
                </Row>
              </Grid>

            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
