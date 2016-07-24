import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, accuBold, accuBlack} from 'universal/styles/fonts';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

import coachImg from './images/drew-portrait-section.png';
import collage from './images/drew-polaroids3.png';

const baseFontSize = 20;

let styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(20)}rem`,
    fontFamily: bodyStack,
    paddingTop: `${pxToEm(50, 20)}em`,
    paddingBottom: `${pxToEm(50, 20)}em`,
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  },
  alan: {
    position: 'absolute',
    bottom: 0,
    right: '50%',
    height: 775
  },
  h1: {
    fontSize: `${pxToEm(50, 20)}em`,
    fontFamily: headerStack,
    textAlign: 'center'
  },
  collage: Object.assign({}, imgResponsive, centerBlock),
  small: {
    fontStyle: 'italic',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '1em'
  }
};



@Radium
export default class MeetTheCoach extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <section style={styles.section}>
        <img style={styles.alan} src={coachImg} alt="Coach Alan Stein" id="coach" className="hidden-xs hidden-sm"/>
        <Grid>
          <Row>
            <Col xs={12} md={6} className="col-md-push-6">
              <h1 style={styles.h1}>Meet Drew Hanlen</h1>
              <p>Drew has spent the last half-decade cementing himself as the go-to-guy for NBA players who want to rapidly improve their performance in games.</p>
              <p>He now boasts one of the most impressive client lists in all of basketball, working year-round with players like Bradley Beal, Andrew Wiggins, David Lee, Dwight Howard, Jordan Clarkson, David Lee, Zach Lavine, and countless other NBA stars.</p>
              <p>Bottom line: When it comes to completely transforming your in-game performance, Drew is the best on the planet.</p>
              <img style={styles.collage} src={collage} alt="Collage"/>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
