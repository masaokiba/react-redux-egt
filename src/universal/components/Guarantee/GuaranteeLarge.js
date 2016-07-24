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

import guarantee from './images/seal-big.png';
// import guaranteeDark from './images/guaranteeDark.png';

const baseFontSize = 20;

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
    fontSize: `${pxToEm(68, baseFontSize)}em`,
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
  img: Object.assign({}, centerBlock, imgResponsive, {
    '@media (max-width: 767px)': {
      marginTop: 20
    }
  })
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
export default class GuaranteeLarge extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      contained
    } = this.props;
    let styles = stylesLight;
    let img = guarantee;

    // if (theme === 'dark') {
    //   styles = stylesDark;
    //   img = guaranteeDark;
    // }

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12} lg={10} lgOffset={1} >

              <Grid fluid>
                <Row>
                  <Col xs={12} sm={8}>
                    <h1 style={styles.h1}>My Personal 1 -Year Guarantee</h1>
                    <p style={styles.p}>
                      Feel completely safe and secure as you place your order, knowing you can get a full refund at any time in the next year if you decide the program isn't for you.
                    </p>
                    <p style={styles.p}>
                      Just shoot us a quick email at helpdesk@eliteguardtraining.com and we'll give you every penny back, no questions asked.
                    </p>
                  </Col>
                  <Col xs={12} sm={4}>
                    <img style={styles.img} src={img} alt=""/>
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
