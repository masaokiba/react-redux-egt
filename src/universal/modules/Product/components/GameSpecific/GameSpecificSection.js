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

import bg from 'universal/images/gsbt-bg.png';

const baseFontSize = 50;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontFamily: bodyStack,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover'
  },
  h1: {
    fontSize: `1em`,
    fontFamily: headerStack,
    fontWeight: accuBlack,
    lineHeight: '1em',
    marginBottom: 0
  },
  quote: {
    fontSize: `${pxToEm(35,baseFontSize)}em`,
    fontFamily: headerStack,
    fontWeight: accuBold,
    lineHeight: '1em',
    marginTop: '.75em',
    color: orange
  },
  p: {
    fontSize: 20
  }
};

@Radium
export default class GameSpecificSection extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Section arrowDown={orange} theme="black" customStyles={styles.section}>
        <Grid>
          <Row>
            <Col xs={12} md={7}>
              <h1 style={styles.h1}>
                Game Specific Basketball Training (GSBT)
              </h1>
              <p style={styles.p}>Game Specific Basketball Training means that if you don&#8217;t do it in a game, you won&#8217;t be doing it in training.</p>
              <p style={styles.p}>So instead of wasting hours each day &#8220;spot shooting&#8221; and putting yourself through silly-looking tennis ball and cone drills &#8212; which are nothing like the moves you&#8217;ll be making in real, live games &#8212; every drill in EGT has been hand-designed to mimic the situations you&#8217;ll face against real defenders.</p>
              <p style={styles.p}>These game situation drills will be trained over and over and top speed until they&#8217;re wired deep into the fabric of your game &#8212; so that you find yourself making perfect reads and reacts every time you step on the court.</p>
              <h1 style={styles.quote}>
                &#8220;If You Don&#8217;t Do It In A Game, Don&#8217;t Do It In Training!&#8221;
              </h1>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
