import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Section from 'universal/components/Section/Section';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, accuBold, accuBlack} from 'universal/styles/fonts';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import Checklist from 'universal/components/Checklist/Checklist';
import minuteTimer from './images/MINUTE-Timer.png';
import daysCal from './images/days-Calendar.png';
import weeksCal from './images/week-calander.png';

const baseFontSize = 50;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontFamily: bodyStack
  },
  h1: {
    fontSize: `1em`,
    fontFamily: headerStack,
    fontWeight: accuBold,
    textAlign: 'center',
    lineHeight: '1em',
    marginBottom: '.25em',
    color: orange
  },
  img: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: '.65em',
    maxHeight: 125
  }),
  h3: {
    fontSize: `${pxToEm(20, baseFontSize)}em`,
    fontFamily: bodyStack,
    textAlign: 'center',
    lineHeight: '1em',
    marginBottom: '0',
    color: orange,
    marginTop: '1.5em',
    textTransform: 'uppercase'
  },
  p: {
    fontSize: `${pxToEm(18, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: '.5em'
  }
};

@Radium
export default class SimpleWorkout extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {

    const items = [
      'Deadly-Accurate Jump Shooting',
      'Ball-On-A-String Handles',
      'Lightning Quickness',
      'Devastating Off-The-Dribble Moves',
      'Pin-Point Passing Accuracy',
      'Near-Perfect On Court Decision Making'
    ];

    return (
      <Section theme="black" customStyles={styles.section} veryTight>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                &nbsp;&nbsp;&nbsp;It’s As Simple As...
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4}>
              <img style={styles.img} src={minuteTimer} alt="" />
              <h3 style={styles.h3}>20 Minutes Per Day</h3>
              <p style={styles.p}><strong>Add 4 Week First Step to the <br/> beginning of any skill workout</strong> <br/><i>(some of Alan’s players even use <br/> it as a warmup!)</i></p>
            </Col>
            <Col xs={12} sm={4}>
              <img style={styles.img} src={daysCal} alt="" />
              <h3 style={styles.h3}>4 times per week</h3>
              <p style={styles.p}>You’ll stay fresh, quick and <br/>razor-sharp</p>
            </Col>
            <Col xs={12} sm={4}>
              <img style={styles.img} src={weeksCal} alt="" />
              <h3 style={styles.h3}>4 Weeks of Training</h3>
              <p style={styles.p}>See dramatic changes in less <br/> than one month</p>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
