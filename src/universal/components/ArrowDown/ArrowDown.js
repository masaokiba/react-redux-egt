import React, {Component, PropTypes} from 'react';
import pxToEm from 'universal/utils/pxToEm';
import Radium from 'radium';
import shallowCompare from 'react-addons-shallow-compare';

const arrowDownStyle = {
  height: 0,
  width: 0,
  borderLeftColor: 'transparent',
  borderLeftStyle: 'solid',
  borderLeftWidth: '15vw',
  borderRightStyle: 'solid',
  borderRightWidth: '15vw',
  borderRightColor: 'transparent',
  borderTopStyle: 'solid',
  borderTopWidth: `${pxToEm(27, 16)}rem`,
  position: 'absolute',
  top: 0,
  left: '50%',
  display: 'block',
  marginTop: -1,
  marginRight: 'auto',
  marginBottom: 0,
  marginLeft: '-15vw'
};

@Radium
export default class ArrowDown extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {color, bottom} = this.props;
    let arrowStyle = Object.assign({}, arrowDownStyle, {borderTopColor: color});

    if (bottom) {
      arrowStyle = Object.assign({}, arrowStyle, {
        top: 'initial',
        bottom: 0
      });
    }

    return (
      <div style={arrowStyle}></div>
    );
  }
}
