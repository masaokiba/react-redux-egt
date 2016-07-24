import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {bgGrey, mutedText} from 'universal/styles/colors';
import {headerStack, accuBold, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

import slam from './images/slam.png';
import dime from './images/dime.png';
import espn from './images/espn.png';
import b from './images/b.png';
import beakerlogo from './images/beakerlogo.png';
import mcdonalds from './images/mcdonalds.png';

let styles = {
  logos: {
    textAlign: 'center',
    backgroundColor: '#edece9',
    paddingTop: '2.25rem',
    paddingBottom: '1.5rem'
  },
  logo: {
    paddingLeft: 20,
    paddingRight: 20
  },
  h6: {
    fontSize: `${pxToEm(24)}rem`,
    fontFamily: headerStack,
    color: mutedText,
    textTransform: 'uppercase',
    marginBottom: '.75rem',
    letterSpacing: '5px'
  }
};

@Radium
export default class Logos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <section style={styles.logos}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h6 style={styles.h6}>Alan's Training Has Been Featured In:</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img style={styles.logo} src={slam} alt="SLAM"/>
              <img style={styles.logo} src={dime} alt="Dime"/>
              <img style={styles.logo} src={espn} alt="ESPN"/>
              <img style={styles.logo} src={b} alt="b"/>
              <img style={styles.logo} src={beakerlogo} alt="o"/>
              <img style={styles.logo} src={mcdonalds} alt="McDonald's"/>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
