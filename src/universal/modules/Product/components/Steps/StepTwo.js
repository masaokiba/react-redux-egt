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
import Section from 'universal/components/Section/Section';

import img from './images/step2-video.png';
import download from './images/download.png';
import calendar from './images/calendar.png';
import video from './images/video.png';
import mobileAccess from './images/mobile-access.png';

// import graph from './images/Graph.png';

const baseFontSize = 20;

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop:  `${pxToEm(70, baseFontSize)}em`,
    paddingBottom: `${pxToEm(40, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: black,
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  },
  h3: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    color: orange,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.25em',
    lineHeight: '1em'
  },
  h2: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    color: orange,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.75em',
    marginTop: '1em',
    lineHeight: '1em'
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(50, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '.5em',
    lineHeight: '1em'
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  p: {
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },
  listItem: {
    background: orange,
    color: white,
    padding: 10,
    marginBottom: 10
  },
  listItemAlt: {
    background: white,
    color: black,
    padding: 10,
    marginBottom: 10
  },
  itemWrapper: Object.assign({}, centerBlock, {
    width: '90%'
  }),
  itemWrapperAlt: Object.assign({}, centerBlock, {
    width: '95%'
  }),
  itemImg: Object.assign({}, imgResponsive, {
    display: 'inline-block',
    verticalAlign: 'middle',
  }),
  itemImgAlt: Object.assign({}, imgResponsive, {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 113
  }),
  itemContent: {
    display: 'inline-block',
    padding: '0 15px',
    verticalAlign: 'middle'
  },
  itemContentAlt: {
    display: 'inline-block',
    padding: '0 15px',
    verticalAlign: 'middle',
    width: '83%'
  },
  itemHeading: {
    fontFamily: bodyStack,
    fontSize: `${pxToEm(22, baseFontSize)}em`,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: 0
  },
  itemHeadingBig: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(50, baseFontSize)}em`,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: 0,
    color: orange,
    fontStyle: 'italic',
    lineHeight: '1em'
  },
  itemText: {
    fontFamily: bodyStack,
    fontSize: `${pxToEm(20, baseFontSize)}em`,
    margin: 0
  }
};

@Radium
export default class StepTwo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      phase,
      count
    } = this.props;

    return (
      <Section theme="grey" customStyles={styles.section} even>
        <Grid>
          <Row>
            <Col xs={12} >

              <Grid fluid>
                <Row>
                  <Col sm={7}>
                    <h3 style={styles.h3}>Step #2:</h3>
                    <h1 style={styles.h1}>Execute Your Workouts</h1>
                    <p>Now that we have your perfect training program, it&#8217;s time to execute. Drew has laid everything out for you week by week, day by day, and drill by drill &#8212; simply follow exactly what he says, and watch every skill in your game skyrocket.</p>
                  </Col>
                  <Col sm={5}>
                    <img style={styles.img} src={img} alt=""/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={8} lgOffset={2}>
                    <h2 style={styles.h2}>The EGT System Comes Complete With:</h2>

                    <div style={styles.listItem}>
                      <div style={styles.itemWrapper}>
                        <img style={styles.itemImg} src={download} alt="" />
                        <div style={styles.itemContent}>
                          <h5 style={styles.itemHeading}>Downloadable Workout Sheets</h5>
                          <p style={styles.itemText}>Always know your drills, sets & reps</p>
                        </div>
                      </div>
                    </div>

                    <div style={styles.listItem}>
                      <div style={styles.itemWrapper}>
                        <img style={styles.itemImg} src={calendar} alt="" />
                        <div style={styles.itemContent}>
                          <h5 style={styles.itemHeading}>Monthly Training Schedules</h5>
                          <p style={styles.itemText}>Never miss a single workout</p>
                        </div>
                      </div>
                    </div>

                    <div style={styles.listItem}>
                      <div style={styles.itemWrapper}>
                        <img style={styles.itemImg} src={video} alt="" />
                        <div style={styles.itemContent}>
                          <h5 style={styles.itemHeading}>Live Video Demonstrations Of Every Drill</h5>
                          <p style={styles.itemText}>Watch Drew demonstrate it live</p>
                        </div>
                      </div>
                    </div>

                    <div style={styles.listItemAlt}>
                      <div style={styles.itemWrapperAlt}>
                        <img style={styles.itemImgAlt} src={mobileAccess} alt="" />
                        <div style={styles.itemContentAlt}>
                          <h4 style={styles.itemHeadingBig}>Plus...</h4>
                          <h5 style={styles.itemHeading}>Access The Program On Your Mobile Device</h5>
                          <p style={styles.itemText}>
                            Once you log into EGT, you&#8217;ll be able to stream the
                            program from your phone or tablet anywhere you have
                            a wifi connection (or, save the workouts so that you can
                            access them <strong>offline!</strong>)
                          </p>
                        </div>
                      </div>
                    </div>

                  </Col>
                </Row>
              </Grid>

            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
