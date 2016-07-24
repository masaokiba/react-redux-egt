import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {headerStack, bodyStack} from 'universal/styles/fonts';
import {black, orangeAlt, yellow} from 'universal/styles/colors';

const styles = {
  Card: {
    backgroundColor: orangeAlt,
    borderRadius: 6,
    marginTop: '1em',
    marginBottom: '1em',
    marginLeft: '1em',
    marginRight: '1em',
    paddingTop: '1em',
    paddingBottom: '1em',
    paddingLeft: '1em',
    paddingRight: '1em',
    '@media (max-width: 767px)': {
      paddingTop: '5em',
      marginTop: '6em',
      marginBottom: '2em'
    }
  },
  imageContainer: {
    position: 'absolute',
    left: -75,
    '@media (max-width: 767px)': {
      marginLeft: -75,
      left: '50%',
      top: 0
    }
  },
  playerImage: {
    '@media (max-width: 767px)': {
      width: 150
    }
  },
  desc: {
    marginLeft: 100,
    marginRight: 50,
    '@media (max-width: 767px)': {
      marginLeft: 0,
      textAlign: 'center',
      marginRight: 0
    }
  },
  text: {
    color: '#fff',
    fontFamily: bodyStack,
    margin: '10px 0 10px 0',
    fontStyle: 'italic',
    fontSize: '16px',
    '@media (min-width: 768px)': {
      fontSize: '18px'
    },
    '@media (min-width: 992px)': {
      fontSize: '19px'
    },
    '@media (min-width: 1200px)': {
      fontSize: '20px'
    }
  },
  player: {
    fontSize: '1.3em'
  },
  playerName: {
    marginTop: 20,
    color: black,
    fontFamily: headerStack,
    fontWeight: 'bold'
  },
  playerTeam: {
    fontFamily: bodyStack,
    color: yellow,
    fontStyle: 'italic',
    marginRight: '30%',
    '@media (max-width: 768px)': {
      marginRight: 0
    },
  },
  sig: {
    position: 'absolute',
    right: 40,
    bottom: '18%',
    maxWidth: 150,
    maxHeight: 40,
    '@media (max-width: 767px)': {
      position: 'initial',
      marginBottom: 10
    },
  }
};

@Radium
export default class Card extends Component {
  render() {
    return (
      <div style={styles.Card}>
        <div style={styles.imageContainer}>
          <img style={styles.playerImage} src={this.props.img} alt={this.props.player}/>
        </div>

        <div style={styles.desc}>
          <p style={styles.text}>
            {this.props.text}
          </p>
          <img src={this.props.sigImg} style={styles.sig} alt="Player's signature"/>
          <p style={styles.player}>
            <span style={styles.playerName}>{this.props.player},</span>
            <br/>
            <span style={styles.playerTeam}>{this.props.org}</span>
          </p>
        </div>
      </div>
    );
  }
}
