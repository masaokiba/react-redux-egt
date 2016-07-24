import React, {Component} from 'react';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import DownsellProductOne from './DownsellProductOne';
import DownsellProductTwo from './DownsellProductTwo';
import DownsellProductThree from './DownsellProductThree';
import DownsellProductFour from './DownsellProductFour';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  phases: {
    position: 'relative'
  }
};

@Radium
export default class DownsellProducts extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      arrowDown
    } = this.props;

    return (
      <div style={styles.phases}>
        {arrowDown && <ArrowDown color={arrowDown}/>}
        <DownsellProductOne/>
        <DownsellProductTwo/>
        <DownsellProductThree/>
        <DownsellProductFour/>
      </div>
    );
  }
}
