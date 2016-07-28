import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {orange, white, black, bgGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, proxReg, proxSemiBold, accuBold, accuBlack} from 'universal/styles/fonts';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import createMarkup from 'universal/utils/createMarkup' ;
import checklistImg from 'universal/images/arrow-right-bullet.png';

const baseFontSize = 20;

const styles = {
  ul: {
    paddingLeft: 0,
    marginTop: '0em'
  },
  li: {
    backgroundImage: `url(${checklistImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px 18px',
    padding: '16px 0 10px 50px',
    listStyle: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },
  liAlt: {
    backgroundImage: `url(${checklistImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px 18px',
    padding: '16px 0 10px 50px',
    listStyle: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold'
  }
}

@Radium
export default class Checklist extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      items,
      stripe,
      titles,
      longText,
      padding,
      backgroundPosition,
      textAlign,
      paddingLeft,
      minHeight
    } = this.props;
    let count = 0;

    let ulStyle = styles.ul;
    if (textAlign) {
      ulStyle = Object.assign({}, ulStyle, {
        textAlign
      })
    }

    if (minHeight) {
      ulStyle = Object.assign({}, ulStyle, {
        minHeight
      })
    }

    return (
      <ul style={ulStyle}>
        {items.map((item) => {
          let liStyle = styles.li;
          count = count + 1;
          if (stripe) {
            liStyle = count % 2 === 0 ? styles.li : styles.liAlt;
          }

          if (titles) {
            liStyle = Object.assign({}, liStyle, {
              padding: '0 0 0 50px',
              textTransform: 'uppercase',
              fontFamily: headerStack,
              fontSize: 33,
              marginTop: '.25em',
              marginBottom: '.25em',
              fontWeight: accuBold
            });
          }

          if (longText) {
            liStyle = Object.assign({}, liStyle, {
              fontWeight: accuBold,
              fontSize: 25,
              backgroundPosition: '10px 28px'
            });
          }

          if (padding) {
            liStyle = Object.assign({}, liStyle, {
              padding
            })
          }

          if (backgroundPosition) {
            liStyle = Object.assign({}, liStyle, {
              backgroundPosition
            })
          }

          if (paddingLeft) {
            liStyle = Object.assign({}, liStyle, {
              paddingLeft
            })
          }

          return (
            <li key={`checklist-item-${count}`} style={liStyle}>{item}</li>
          );
        })}
      </ul>
    );
  }
}
