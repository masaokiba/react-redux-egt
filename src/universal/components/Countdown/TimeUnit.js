import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import {headerStack} from 'universal/styles/fonts';
import {orange, white, black} from 'universal/styles/colors';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import {minLg, minMd} from 'universal/styles/mediaQueries';

const baseFontSize = 55;

const inlineStyles = {
  timeElement: {
    display: 'inline-block',
    fontSize: `${pxToEm(baseFontSize / 2, 16)}rem`,
    fontFamily: headerStack,
    marginRight: `${pxToEm(22, baseFontSize)}em`,
    '@media (min-width: 375px) and (max-width: 767px)': {
      fontSize: `${pxToEm(baseFontSize / 1.75, 16)}rem`,
    },
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`
    }
  },
  numberContainer: {
    background: black,
    paddingTop: `${pxToEm(32, baseFontSize)}em`,
    paddingBottom: `${pxToEm(29, baseFontSize)}em`,
    paddingLeft: 'auto',
    paddingRight: 'auto',
    borderBottom: `${pxToEm(8, baseFontSize)}em solid ${orange}`,
    width: `${pxToEm(120, baseFontSize)}em`
  },
  number: {
    fontSize: '1em',
    lineHeight: '1em',
    color: white
  },
  unit: {
    fontSize: `${pxToEm(28, baseFontSize)}em`,
    textTransform: 'uppercase'
  }
};

const floatingBaseFontSize = 20;

const styles = Object.assign({
  timeElement: {
    display: 'inline-block',
    fontSize: `${pxToEm(floatingBaseFontSize - 8, 16)}rem`,
    fontFamily: headerStack,
    marginRight: `${pxToEm(5, floatingBaseFontSize)}em`,
    marginBottom: '0',
    '@media (min-width: 992px)': {
      display: 'block',
      fontSize: `${pxToEm(floatingBaseFontSize - 5, 16)}rem`,
      marginBottom: '.5em',
    },
  },
  numberContainer: {
    background: white,
    paddingTop: `${pxToEm(26, floatingBaseFontSize)}em`,
    paddingBottom: `${pxToEm(22, floatingBaseFontSize)}em`,
    paddingLeft: 'auto',
    paddingRight: 'auto',
    borderBottom: `${pxToEm(8, floatingBaseFontSize)}em solid ${black}`,
    width: `${pxToEm(99, floatingBaseFontSize)}em`
  },
  number: {
    fontSize: '2em',
    lineHeight: '1em',
    color: black,
    '@media (max-width: 768px)': {
      fontSize: '1.5em'
    },
  },
  unit: {
    fontSize: `${pxToEm(28, floatingBaseFontSize)}em`,
    textTransform: 'uppercase',
    color: white
  }
});

const twoDigits = (n) => {
  return n > 9 ? "" + n : "0" + n;
};

@Radium
export default class TimeUnit extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      inline,
      number,
      unit,
      last,
      underlineColor
    } = this.props;

    const componentStyles = Object.assign({}, (inline) ? inlineStyles : styles);

    if (last) {
      componentStyles.timeElement.marginRight = 0;
    }

    if (underlineColor) {
      componentStyles.numberContainer.borderBottom = `${pxToEm(8, baseFontSize)}em solid ${underlineColor}`
    }

    return (
      <div style={componentStyles.timeElement}>
        <div style={componentStyles.numberContainer}>
          <span style={componentStyles.number}>{twoDigits(number)}</span>
        </div>
        <div style={componentStyles.unit}>
          {unit}
        </div>
      </div>
    );
  }
}
