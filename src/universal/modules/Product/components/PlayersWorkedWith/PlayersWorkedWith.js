import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, bgGrey} from 'universal/styles/colors';
import {headerStack, accuBold, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

import kd from './images/pro-kevin-durant.jpg';
import tr from './images/pro-terrance-ross.jpg';
import gv from './images/pro-greivis-vasquez.jpg';
import vo from './images/pro-victor-oladipo.jpg';
import jg from './images/pro-jerami-grant.jpg';
import jg2 from './images/pro-jarian-grant.jpg';

const baseFontSize = 50;

const playerBase = {
  position: 'absolute',
  maxWidth: 275,
  padding: 10,
  backgroundColor: 'rgb(255,255,255)',
  transform: 'rotate(-7deg)',
  msTransform: 'rotate(-7deg)',
  MozTransform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
  OTransform: 'rotate(-7deg)',
  WebkitTransition: 'all 0.2s linear',
  transition: 'all 0.2s linear',
  WebkitTransformStyle: 'preserve-3d',
  boxShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  msFilter: '"progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#33000000,Positive=true)"',
  filter: 'progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#33000000,Positive=true)',
  ':hover': {
    zIndex: 10,
    transform: 'rotate(0deg)',
    msTransform: 'rotate(0deg)',
    MozTransform: 'rotate(0deg)',
    WebkitTransform: 'rotate(0deg)',
    OTransform: 'rotate(0deg)',
    WebkitTransition: 'all 0.2s linear',
    transition: 'all 0.2s linear',
  },
  '@media (max-width: 991px)': {
    maxWidth: 200
  },
  '@media (max-width: 480px)': {
    maxWidth: 220
  },
  '@media (max-width: 320px)': {
    maxWidth: 180
  }
};

const styles = {
  section: {
    position: 'relative',
    fontWeight: accuBold,
    fontSize: `${pxToEm(baseFontSize - 20, 16)}rem`,
    fontFamily: headerStack,
    color: black,
    paddingTop: '1.5em',
    paddingBottom: '2em',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: bgGrey,
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize - 10, 16)}rem`
    },
    '@media (min-width: 992px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`
    }
  },
  h1: {
    marginTop: 0,
    marginBottom: '1em',
    fontWeight: accuBold,
    fontSize: '1em',
    lineHeight: '1em'
  },
  collage: {
    position: 'relative',
    height: 635,
    '@media (max-width: 991px)': {
      height: 440
    },
    '@media (max-width: 480px)': {
      height: 992
    },
    '@media (max-width: 320px)': {
      height: 680
    }
  },
  playerName: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    fontSize: '.7em'
  },
  playerTeam: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '.1em',
    fontSize: '.5em'
  },
  player1: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-5deg)',
    msTransform: 'rotate(-5deg)',
    transform: 'rotate(-5deg)',
    left: '1%'
  }),
  player2: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(7deg)',
    msTransform: 'rotate(7deg)',
    transform: 'rotate(7deg)',
    left: '28%',
    marginTop: '3%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(7deg)',
      msTransform: 'rotate(7deg)',
      transform: 'rotate(7deg)',
      left: '47%',
      marginTop: '7%'
    },
    '@media (max-width: 320px)': {
      left: '31%'
    }
  }),
  player3: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-15deg)',
    msTransform: 'rotate(-15deg)',
    transform: 'rotate(-15deg)',
    left: '71%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-12deg)',
      msTransform: 'rotate(-12deg)',
      transform: 'rotate(-12deg)',
      left: '4%',
      marginTop: '41%'
    }
  }),
  player4: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(3deg)',
    msTransform: 'rotate(3deg)',
    transform: 'rotate(3deg)',
    marginTop: '22%',
    left: '1%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(3deg)',
      msTransform: 'rotate(3deg)',
      transform: 'rotate(3deg)',
      marginTop: '84%',
      left: '51%'
    }
  }),
  player5: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-4deg)',
    msTransform: 'rotate(-4deg)',
    transform: 'rotate(-4deg)',
    left: '45%',
    marginTop: '11%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-4deg)',
      msTransform: 'rotate(-4deg)',
      transform: 'rotate(-4deg)',
      left: '3%',
      marginTop: '90%'
    }
  }),
  player6: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-4deg)',
    msTransform: 'rotate(-4deg)',
    transform: 'rotate(-4deg)',
    left: '73%',
    marginTop: '21%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-4deg)',
      msTransform: 'rotate(-4deg)',
      transform: 'rotate(-4deg)',
      left: '40%',
      marginTop: '148%'
    }
  }),
  playerImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    filter: 'gray',
    WebkitFilter: 'grayscale(100%)',
    ':hover': {
      filter: `url("data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\\'/></filter></svg>#grayscale")`,
      WebkitFilter: 'grayscale(0%)'
    }
  },
  best: {
    color: orange,
    fontWeight: accuBlack
  }
};


@Radium
export default class PlayersWorkedWith extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const players = [
      {
        name: 'Kevin Durant',
        team: 'OKC Thunder',
        img: kd
      },
      {
        name: 'Terrance Ross',
        team: 'Toronto Raptors',
        img: tr
      },
      {
        name: 'Greivis Vasquez',
        team: 'Milwaukee Bucks',
        img: gv
      },
      {
        name: 'Victor Oladipo',
        team: 'Orlando Magic',
        img: vo
      },
      {
        name: 'Jerami Grant',
        team: 'Philadelphia 76ers',
        img: jg
      },
      {
        name: 'Jerian Grant',
        team: 'New York Knicks',
        img: jg2
      }
    ];

    let count = 0;

    return (
      <section style={styles.section}>
        <ArrowDown color={black}/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                Coach Alan Has Shared These Techniques <br/>
                With Some Of The <span style={styles.best}>Best Players In The World...</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div style={styles.collage}>

                {players.map((player) => {
                  count = count + 1;

                  return (
                    <span key={count} style={styles[`player${count}`]}>
                      <img key={`player${count}img`} style={styles.playerImg} src={player.img} alt={player.name}/>
                      <h4 style={styles.playerName}>{player.name}</h4>
                      <h5 style={styles.playerTeam}>{player.team}</h5>
                    </span>
                  );
                })}

              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
