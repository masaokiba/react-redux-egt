import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import {orange, white} from 'universal/styles/colors';
import Countdown from 'universal/components/Countdown/Countdown';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  'countdown': {
    position: 'fixed',
    zIndex: 20,
    background: orange,
    paddingTop: '1em',
    paddingRight: '1em',
    paddingLeft: '1em',
    paddingBottom: '.5em',
    boxShadow: '-1px 0px 15px #666',
    top: 0,
    left: 0,
    right: 0,
    '@media (min-width: 992px)': {
      right: 0,
      top: '10%',
      left: 'auto',
      borderLeft: `5px solid ${white}`,
      borderTop: `5px solid ${white}`,
      borderBottom: `5px solid ${white}`,
      borderRight: 0
    }
  }
};

@Radium
export default class FloatingCountdown extends Component {
  static propTypes = {
    timeRemaining: PropTypes.number.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      timeRemaining,
      text
    } = this.props;
    return (
      <div style={styles.countdown}>
        <Countdown timeRemaining={timeRemaining} text={text}/>
      </div>
    );
  }
}
