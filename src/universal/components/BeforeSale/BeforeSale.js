import React, {Component} from 'react';
import Radium from 'radium';
import {orange, white} from 'universal/styles/colors';
import {headerStack} from 'universal/styles/fonts';
import Countdown from 'universal/components/Countdown/Countdown';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

const baseFontSize = 60;

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 19,
    background: 'rgba(0,0,0,.85)',
    display: 'block'
  },
  text: {
    color: white,
    fontFamily: headerStack,
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '25vw',
    '@media (max-width: 768px)': {
      marginTop: '50vw'
    }
  }
};


@Radium
export default class BeforeSale extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div style={styles.overlay}>
        <h1 style={styles.text}>Sale Has Not Begun</h1>
      </div>
    );
  }
}
