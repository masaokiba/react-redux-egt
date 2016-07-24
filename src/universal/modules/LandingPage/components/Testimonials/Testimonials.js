import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import _ from 'lodash';

import Card from '../Card/Card';

import durant from './images/kevin-durant.png';
import durantSig from './images/kevin-durant-sig.png';

import terranceRoss from './images/terrance-ross.png';
import terranceRossSig from './images/terrance-ross-sig.png';

import victorOlapido from './images/victor-oladipo.png';
import victorOlapidoSig from './images/victor-oladipo-sig.png';

import Radium from 'radium';

const styles = {
  testimonials: {
    '@media (max-width: 768px)': {
      marginTop: '2rem'
    },
  }
};

@Radium
export default class Main extends Component {
  render() {
    const cards = _.sortBy([
      {
        order: 1,
        img: durant,
        sigImg: durantSig,
        player: 'Kevin Durant',
        org: '2014 NBA MVP',
        text: `“Alan was a very influential person in my life… He did a great job of telling me what my body needs and I learned a lot from him. I still do the things he tells me to this day.”`
      },
      {
        order: 2,
        img: terranceRoss,
        sigImg: terranceRossSig,
        player: 'Terrance Ross',
        org: '2013 NBA Dunk Contest Champion',
        text: `“Coach Stein taught me how to maximize my athleticismm on the court. His workouts were fun, intense, and basketball specific.”`
      },
      {
        order: 3,
        img: victorOlapido,
        sigImg: victorOlapidoSig,
        player: 'Victor Oladipo',
        org: '2015 NBA Dunk Contest Finalist',
        text: `“I loved Coach Stein’s workouts. They were fun, intense, but most importantly — they were very basketball specific.”`
      }
    ], 'order');

    return (
      <section id="testimonials" style={styles.testimonials}>
          {cards.sort().map((card) => {
            return (<Row key={card.player}>
              <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
                <Card img={card.img}
                  sigImg={card.sigImg}
                  player={card.player}
                  org={card.org}
                  text={card.text}/>
              </Col>
            </Row>);
          })}
      </section>
    );
  }
}
