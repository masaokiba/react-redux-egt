import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Section from 'universal/components/Section/Section';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, accuBold, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import BigChecklistItem from 'universal/components/BigChecklistItem/BigChecklistItem';

import issacRight from './images/issacRight.png';
import videoFrame from './images/VIDEO-FRAME.png';

const baseFontSize = 50;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontFamily: bodyStack,
    textAlign: 'center'
  },
  h1: {
    fontSize: `1em`,
    fontFamily: headerStack,
    fontWeight: accuBold,
    textAlign: 'center',
    lineHeight: '1em',
    color: orange,
    marginBottom: 0
  },
  listHeading: {
    fontSize: `1em`,
    fontFamily: headerStack,
    fontWeight: accuBlack,
    textAlign: 'center',
    lineHeight: '1em',
    textDecoration: 'underline',
    marginTop: '.75em'
  }
};

@Radium
export default class MimicsRealGamesSection extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {

    const items = [
      {
        title: '"Clown" Drills',
        desc: `Throw away your cones and tennis balls,
              the real pros will laugh you off the court`,
        transparent: true,
        negative: true
      },
      {
        title: 'Monotonous Spot Shooting',
        desc: `Stop spending hours standing around shooting
              hundreds of shots you would never shoot in a game`,
        transparent: true,
        negative: true
      },
      {
        title: 'Spending 5 Hours Per Day...',
        desc: `...Grinding through exhausting workouts that
              only make you worse in real games`,
        transparent: true,
        negative: true
      }
    ];

    return (
      <Section arrowDown={lightGrey} theme="black" customStyles={styles.section}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                Every EGT Workout Is Designed <br/>
                To Mimic A Real, Live Game&#8230;
              </h1>
              <h1 style={styles.listHeading}>
                No More Pointless:
              </h1>
            </Col>
            <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
              {items.map((item) => {
                return (
                  <BigChecklistItem key={item.title} {...item} />
                );
              })}
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
