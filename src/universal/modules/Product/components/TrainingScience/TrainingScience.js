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

import scienceBall from 'universal/images/SCIENCE-BALL.png'

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
    marginBottom: 0
  },
  img: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: '.65em'
  })
};

@Radium
export default class TrainingScience extends Component {
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
      <Section theme="grey" customStyles={styles.section} veryTight>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                This Is The Same Training Science <br/>
                Drew Has Used To Give Dozens Of NBA Stars:
              </h1>
            </Col>
            <Col xs={12} sm={6}>
              <img style={styles.img} src={scienceBall} alt="SCIENCE BALL"/>
            </Col>
            <Col xs={12} sm={6}>
              <Checklist items={items} symbol='leftArrow' titles/>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
