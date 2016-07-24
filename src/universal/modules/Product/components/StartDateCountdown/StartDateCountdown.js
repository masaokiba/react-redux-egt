import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey} from 'universal/styles/colors';
import {headerStack, accuBold, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

@Radium
export default class StartDateCountdown extends Component {
  static propTypes = {
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    timeRemaining: PropTypes.number.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      originalPrice,
      salePrice,
      timeRemaining,
      underlineColor
    } = this.props;

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                4 Week First Step Launches In:
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Countdown inline={true} timeRemaining={timeRemaining} underlineColor={white} />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

const baseFontSize = 65;

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize-37,16)}rem`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    backgroundColor: orange,
    color: white,
    '@media (min-width: 375px)': {
      fontSize: `${pxToEm(baseFontSize-31,16)}rem`,
    },
    '@media (min-width: 414px)': {
      fontSize: `${pxToEm(baseFontSize-27,16)}rem`,
    },
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize-10,16)}rem`,
    },
    '@media (min-width: 992px)': {
      fontSize: `${pxToEm(baseFontSize-5,16)}rem`,
    },
    '@media (min-width: 1200px)': {
      fontSize: `${pxToEm(baseFontSize,16)}rem`,
    }
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `1em`,
    color: white,
    textAlign: 'center',
    marginTop: '.5em',
    marginBottom: `.5em`,
    textTransform: 'uppercase'
  },
  originalPrice: {
    textDecoration: 'linethrough'
  },
  salePrice: {
    textDecoration: 'underline',
    color: orange,
    fontWeight: accuBlack
  }
}
