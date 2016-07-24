import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import IntroVideo from 'universal/components/IntroVideo/IntroVideo';
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber';
import Radium from 'radium';
import shallowCompare from 'react-addons-shallow-compare';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import {black, white, orange} from 'universal/styles/colors';
import {headerStack, accuBlack, accuBold, accuMed} from 'universal/styles/fonts';

import introBG from 'universal/images/downsell-intro-bg.png';
import introBGSmall from 'universal/images/intro-bg-sm.png';
import logo from './images/egtLogo.png';

import rightImg from './images/playerRightNew.png';
import leftImg from './images/alanLeft.png';

const styles = {
  'Intro': {
    backgroundColor: black,
    backgroundImage: `url(${introBG})`,
    backgroundSize: '100% 100%',
    textAlign: 'center',
    position: 'relative',
    '@media (max-width: 767px)': {
      backgroundImage: `url(${introBGSmall})`
    }
  },
  'header': {
    position: 'relative',
    zIndex: 5
  },
  'brand': Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '14px',
    float: 'left'
  }),
  'imagesLayer': {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  'rightIntroImg': {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%'
  },
  'issac-img': {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%'
  },
  'bigDude': {
    height: '100%'
  },
  introTextH3: {
    fontFamily: headerStack,
    fontSize: 78,
    fontWeight: accuMed,
    textTransform: 'uppercase',
    lineHeight: '.75em',
    color: white,
    marginTop: 0,
    marginBottom: 0
  },
  introTextH1: {
    fontFamily: headerStack,
    fontSize: 140,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    lineHeight: '.85em',
    color: orange,
    marginTop: 0,
    marginBottom: 0
  },
  introTextH2: {
    fontFamily: headerStack,
    fontSize: 140,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    lineHeight: '.85em',
    color: white,
    marginTop: -10,
    marginBottom: 0,
    paddingBottom: '.4em'
  }
};


@Radium
export default class OptionsIntro extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      videoId
    } = this.props;

    return (
      <section style={styles.Intro}>
        <header style={styles.header}>
          <Grid>
            <Row>
              <Col xs={6} md={4} mdOffset={2}>
                <img style={styles.brand} src={logo} alt="logo"/>
              </Col>
              <Col xs={6} md={4}>
                <PhoneNumber float="right"/>
              </Col>
            </Row>
          </Grid>
        </header>
        <div>
          <h3 style={styles.introTextH3}>
            Get Coach Alan's
          </h3>
          <h1 style={styles.introTextH1}>
            4 Most Powerful
          </h1>
          <h2 style={styles.introTextH2}>
            First Step Drills
          </h2>
        </div>

      </section>
    );
  }
}
