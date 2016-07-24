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

import vipLarge from './images/vip2l.png';

const baseFontSize = 20;

const styles = {
  header: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1em',
    lineHeight: '1em'
  },
  img: Object.assign({}, centerBlock, imgResponsive, {
    marginTop: '2.5em',
    '@media (max-width: 768px)': {
      maxWidth: 180
    }
  }),
  p: {
    fontFamily: bodyStack,
    textAlign: 'center',
    fontSize: `${pxToEm(baseFontSize-4)}rem`,
    '@media (min-width: 768px)': {
      textAlign: 'left',
      fontSize: `${pxToEm(baseFontSize)}rem`,
    }
  },
  orange: {
    color: orange
  }
};

@Radium
export default class SamePrice extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h2 style={styles.header}>Why Does The <span style={styles.orange}>VIP Package</span> Cost The Same As The Basic Package?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <img style={styles.img} src={vipLarge} alt="VIP"/>
          </Col>
          <Col xs={12} sm={8}>
            <p style={styles.p}>It's because I want you to experience everything the VIP coaching program has to offer... And how rapidly it can take your guard play to the next level.</p>
            <p style={styles.p}>Virtually all of the members consider the VIP program one of the best decisions they've ever made because you learn so many advanced tricks and skills that can't possibly be taught in a "program".</p>
            <p style={styles.p}>I want you to feel safe and secure knowing that you're taking a risk-free 14 day "test drive" of the VIP program, just to see if it's right for you FIRST, before you pay a dime... And that's why we've made it an absolute "no-brainer" offer for anyone deciding between the two packages. Simple as that.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
