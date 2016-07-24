import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import {orange, white} from 'universal/styles/colors';
import Countdown from 'universal/components/Countdown/Countdown';
import shallowCompare from 'react-addons-shallow-compare';
import countdownImg from 'universal/images/arcollsale47.png';

const styles = {
  'countdown': {
    position: 'fixed',
    zIndex: 200,
    paddingTop: '1em',
    paddingRight: '1em',
    paddingLeft: '1em',
    paddingBottom: '.5em',
    boxShadow: '-1px 0px 15px #666',
    top: 0,
    right: 0,
    backgroundImage: `url(${countdownImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: 325,
    height: 213
  }
};

@Radium
export default class OldFloatingCountdown extends Component {
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
      text,
      bottomText
    } = this.props;
    return (
      <div style={styles.countdown}>
        <Countdown inline old timeRemaining={timeRemaining}/>
      </div>
    );
  }
}
