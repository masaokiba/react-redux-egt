import React, {Component} from 'react';
import pxToEm from 'universal/utils/pxToEm';
import {accuBlack, accuBold, headerStack} from 'universal/styles/fonts';
import {orange, black, white, bgGrey} from 'universal/styles/colors';
import shallowCompare from 'react-addons-shallow-compare';
import Radium from 'radium';
import ArrowDown from '../ArrowDown/ArrowDown';

const baseFontSize = 20;

const styles = {
  section: {
    color: black,
    position: 'relative',
    padding: '5rem 0 3.5rem 0',
    fontFamily: headerStack,
    fontSize: `${pxToEm(baseFontSize)}rem`,
  }
}

@Radium
export default class Section extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      theme,
      arrowDown,
      tight,
      veryTight,
      even,
      contained,
      dividerTop,
      dividerBottom,
      padding
    } = this.props;

    let sectionStyle = styles.section;

    switch (theme) {
      case 'grey':
        sectionStyle = Object.assign({}, sectionStyle, {
          backgroundColor: bgGrey
        });
        break;
      case 'black':
        sectionStyle = Object.assign({}, sectionStyle, {
          backgroundColor: black,
          color: white
        });
        break;
      default:
        break;
    }

    if (tight) {
      sectionStyle = Object.assign({}, sectionStyle, {
        padding: '4rem 0 3rem 0'
      });
    }
    if (veryTight) {
      sectionStyle = Object.assign({}, sectionStyle, {
        padding: '1rem 0 1rem 0'
      });
    }
    if (even) {
      sectionStyle = Object.assign({}, sectionStyle, {
        padding: '2em 0'
      });
    }
    if (contained) {
      sectionStyle = Object.assign({}, sectionStyle, {
        padding: '2em'
      });
    }

    if (padding) {
      sectionStyle = Object.assign({}, sectionStyle, {
        padding
      });
    }

    return (
      <section style={sectionStyle}>
        {arrowDown && <ArrowDown color={arrowDown}/>}
        {this.props.children}
      </section>
    );
  }
}
