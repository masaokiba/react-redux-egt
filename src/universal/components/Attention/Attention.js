import React, {Component} from 'react';
import pxToEm from 'universal/utils/pxToEm';
import {accuBlack, accuBold, headerStack} from 'universal/styles/fonts';
import {orange, black, white} from 'universal/styles/colors';
import shallowCompare from 'react-addons-shallow-compare';
import Radium from 'radium';

const baseFontSize = 50;

const styles = {
  attention: {
    background: orange,
    fontWeight: accuBold,
    fontFamily: headerStack,
    color: white,
    paddingTop: `.7em`,
    paddingBottom: `.75em`,
    paddingLeft: `.75em`,
    paddingRight: `.75em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: `${pxToEm(baseFontSize - 20, 16)}rem`,

    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize - 10, 16)}rem`,
    },
    '@media (min-width: 992px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    }
  },
  h1: {
    margin: '0 0 0 0',
    fontWeight: accuBold,
    fontSize: '1em',
    lineHeight: '1em'
  }
};

@Radium
export default class Attention extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      theme,
      contained,
      pureText,
      big
    } = this.props;

    let attentionStyle = theme === 'dark' ? Object.assign({}, styles.attention, {
      background: black
    }) : styles.attention;

    let headingStyle = styles.h1;

    if (contained) {
      attentionStyle = Object.assign({}, attentionStyle, {
        borderLeft: '5px solid #111',
        borderRight: '5px solid #111',
      });
    }

    if (pureText) {
      attentionStyle = Object.assign({}, attentionStyle, {
        textTransform: 'none'
      });
    }

    if (big) {
      headingStyle = Object.assign({}, headingStyle, {
        fontSize: `${pxToEm(80 - 20, 16)}rem`,
        '@media (min-width: 768px)': {
          fontSize: `${pxToEm(80 - 10, 16)}rem`,
        },
        '@media (min-width: 992px)': {
          fontSize: `${pxToEm(80, 16)}rem`,
        }
      });
    }

    return (
      <section style={attentionStyle}>
        <h1 style={headingStyle}>
          {this.props.children}
        </h1>
      </section>
    );
  }
}
