import React, {Component} from 'react';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  phases: {
    position: 'relative'
  }
};

@Radium
export default class Steps extends Component {
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
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </div>
    );
  }
}
