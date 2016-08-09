import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Section from 'universal/components/Section/Section';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey, bgGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, accuBold, accuBlack} from 'universal/styles/fonts';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import Checklist from 'universal/components/Checklist/Checklist';
import BigChecklistItem from './BigChecklistItem/BigChecklistItem';

import scienceBall from 'universal/images/SCIENCE-BALL.png'

const baseFontSize = 65;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontFamily: headerStack,
    fontWeight: accuBold
  },
  h1: {
    fontSize: `1em`,
    fontFamily: headerStack,
    fontWeight: accuBlack,
    lineHeight: '1em',
    marginBottom: '.1em',
    textAlign: 'center',
    marginTop: '.5em'
  },
  img: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: '.65em'
  }),
  em: {
    fontWeight: accuBlack,
    color: orange,
    fontSize: `${(6/5)}em`,
    marginRight: 5
  },
  align: {
    marginTop: 10
  }
};

@Radium
export default class WhatToExpect extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {

    const items = [
      {
        text: ['Lightning-quick first step speed that can beat almost any defender ', <br key='br-key-1' className='visible-lg'/>  ,'to the rim – ', <i key='i-key-1'>often, without even needing to make a move.</i>],
      },
      {
        text: ['Noticeable increases in your reaction speed that translate into every ', <br key='br-key-2' className='visible-lg'/>, 'area of your game – ', <i key='i-key-2'>so that ALL of your reads and reacts become razor-sharp.</i>]
      },
      {
        text: ['Deadly off-the-dribble explosiveness that allows you to turn the corner ', <br key='br-key-3' className='visible-lg'/>, 'and get to the rim against the toughest defenders.']
      },
      {
        text: ['Quicker ', <span key='spring'>&#8220;spring&#8221;</span>, ' off the ground, so you can get into the air and finish before the defense reacts.']
      },
      {
        text: ['More points off drives, more steals on defense, and faster, more efficient movement no matter where you are on the court.']
      }
    ];

    const itemsLeft = [
      [`You'll feel significantly lighter and more agile on your feet, as though you're gliding across the ground and skipping into the air`],
      [`Your drives to the hoop will become smooth and effortless, and you'll find yourself squeezing into gaps in the defense you couldn't even see before`],
      [`You'll feel significantly more confident on the court, because your body will be moving with so much more ease – `, <i key='i-key'>as though many of the players you match up against are moving in slow motion</i>]
    ];

    let count = 0;

    return (
      <Grid style={styles.section}>
        <Row>
          <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
            {items.map((item) => {
              count = count + 1;
              return (
                <BigChecklistItem key={`big-checklist-item-${count}`}>
                  <div style={styles.align}>
                    {item.text}
                  </div>
                </BigChecklistItem>
              );
            })}
            <ArrowDown color={bgGrey} bottom/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1 style={styles.h1}>
              <em style={styles.em}>Plus...</em>
            </h1>
          </Col>
          <Col xs={12} sm={10} smOffset={1}  lg={8} lgOffset={2} md={6} mdOffset={3}>
            <Checklist items={itemsLeft} symbol='leftArrow' longText/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
