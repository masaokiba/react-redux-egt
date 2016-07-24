import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import TimeUnit from './TimeUnit';
import {centerBlock} from 'universal/styles/helpers';
import shallowCompare from 'react-addons-shallow-compare';
import createMarkup from 'universal/utils/createMarkup';
import {headerStack} from 'universal/styles/fonts';
import {white} from 'universal/styles/colors';

const styles = {
  countdown: {
    textAlign: 'center',
    transform: 'translateZ(0)'
  },
  p: {
    color: white,
    fontFamily: headerStack,
    marginTop: 0,
    fontSize: '1.3rem',
    marginBottom: '.5em',
    lineHeight: '1em'
  }
};


const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;

@Radium
export default class Countdown extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    timeRemaining: PropTypes.number.isRequired,
    text: PropTypes.string
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      inline,
      text,
      underlineColor
    } = this.props;

    let {
      timeRemaining
    } = this.props;

    const days = Math.floor(timeRemaining / day) || 0;
    timeRemaining = timeRemaining % day;
    const hours = Math.floor(timeRemaining / hour) || 0;
    timeRemaining = timeRemaining % hour;
    const minutes = Math.floor(timeRemaining / minute) || 0;
    timeRemaining = timeRemaining % minute;
    const seconds = timeRemaining || 0;

    return (
      <div style={styles.countdown}>
        {text ? <p style={styles.p} dangerouslySetInnerHTML={createMarkup(text)}/> : null}
        <TimeUnit inline={inline} unit={'Days'} number={days} underlineColor={underlineColor}/>
        <TimeUnit inline={inline} unit={'Hours'} number={hours} underlineColor={underlineColor}/>
        <TimeUnit inline={inline} unit={'Minutes'} number={minutes} underlineColor={underlineColor}/>
        <TimeUnit inline={inline} unit={'Seconds'} number={seconds} underlineColor={underlineColor}/>
      </div>
    );
  }
}
