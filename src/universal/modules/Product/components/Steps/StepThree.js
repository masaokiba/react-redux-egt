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
import liImg from 'universal/images/arrow-right-bullet.png';
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
    marginBottom: '.5em',
    marginTop: '1em',
    lineHeight: '1.25em'
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
  em: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  listItem: {
    color: black,
    padding: 10,
    marginBottom: 10
  },
  itemWrapper: Object.assign({}, centerBlock, {
  }),
  itemImg: Object.assign({}, imgResponsive, {
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: 20
  }),
  itemContent: {
    display: 'inline-block',
    padding: '0 15px',
    verticalAlign: 'middle',
    width: '95%'
  },
  itemHeading: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(35, baseFontSize)}em`,
    fontWeight: accuBold,
    marginTop: 0,
    marginBottom: 0
  },
  itemText: {
    fontFamily: bodyStack,
    fontSize: `${pxToEm(20, baseFontSize)}em`,
    margin: 0,
    fontStyle: 'italic'
  }
};

@Radium
export default class StepThree extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      phase,
      count
    } = this.props;

    const items = [
      {
        title: 'Rapid improvements in every major skill in your game...',
        text: 'Make yourself impossible to guard...Including jump shooting, ball handling, quickness, passing, and scoring ability'
      },
      {
        title: 'Watch your stats skyrocket',
        text: 'Most players see head-turning increases in PPG, APG, and SPG in just a few weeks of training'
      },
      {
        title: 'Dramatic increase in overall basketball IQ and decision-making...',
        text: '...So that you find yourself making the perfect read and react, every time down the floor'
      },
      {
        title: 'Newfound respect for your game from coaches, teammates, and scouts',
        text: "Watch your friends' jaws drop when they realize how good you really are"
      },
      {
        title: 'Finally unlock your true potential as a basketball player',
        text: 'And never settle for anything less, ever again.'
      }
    ];

    return (
      <Section customStyles={styles.section} even>
        <Grid>
          <Row>
            <Col xs={12} >
              <h3 style={styles.h3}>Step #3:</h3>
              <h1 style={styles.h1}>Unleash Your New Skill Set</h1>
              <p>EGT is designed for one goal: To transform your in-game performance as fast as humanly possible. We&#8217;re not just here to make you better &#8212; we&#8217;re here to change the course of your <em style={styles.em}>entire basketball career.</em></p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2 style={styles.h2}>Here&#8217;s a small taste of what you can expect over <br/>
              the next 4-8 weeks (and beyond):</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>

              {items.map((item) => {
                return (
                  <div key={item.title} style={styles.listItem}>
                    <div style={styles.itemWrapper}>
                      <img style={styles.itemImg} src={liImg} alt="" />
                      <div style={styles.itemContent}>
                        <h5 style={styles.itemHeading}>{item.title}</h5>
                        <p style={styles.itemText}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
