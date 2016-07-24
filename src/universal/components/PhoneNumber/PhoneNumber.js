import React, {Component} from 'react';
import phoneWhite from './images/phone.png';
import {headerStack, accuBold} from 'universal/styles/fonts';
import Radium from 'radium';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import {imgResponsive} from 'universal/styles/helpers';

const baseFontSize = 40;

const styles = {
  'phone': {
    float: 'right',
    color: '#FFF',
    verticalAlign: 'middle',
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(baseFontSize - 20, 16)}rem`,
    marginLeft: '.1em',
    lineHeight: '5rem',
    '@media (min-width: 375px)': {
      fontSize: `${pxToEm(baseFontSize - 10, 16)}rem`,
      float: 'left'
    },
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`,
      marginLeft: 0,
      float: 'left'
    },
    '@media (min-width: 992px)': {
      // fontSize: `${pxToEm(baseFontSize-5,16)}rem`,
    },
    '@media (min-width: 1200px)': {
      // fontSize: `${pxToEm(baseFontSize,16)}rem`,
    }

  },
  'phoneImg': Object.assign({}, imgResponsive, {
    lineHeight: '2.1em',
    verticalAlign: 'middle',
    marginRight: '.2rem',
    '@media (max-width: 414px)': {
      maxWidth: 150,
    },
    display: 'inline-block'
  })
};


@Radium
export default class PhoneNumber extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      float
    } = this.props;

    let phoneStyle = Object.assign({}, styles.phone, float ? {
      float,
      '@media (min-width: 375px)': {
        float,
        fontSize: `${pxToEm(baseFontSize - 10, 16)}rem`,
      },
      '@media (min-width: 768px)': {
        float,
        fontSize: `${pxToEm(baseFontSize, 16)}rem`,
        marginLeft: 0
      }} : {});

    return (
      <span style={phoneStyle}>
        <img src={phoneWhite}
          alt="phone"
          style={styles.phoneImg}/>
        1.866.259.2456
      </span>
    );
  }
}
