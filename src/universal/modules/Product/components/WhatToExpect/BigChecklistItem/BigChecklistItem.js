import React, {Component, PropTypes} from 'react';
import {bgGrey, black, white, orange} from 'universal/styles/colors';
import {bodyStack, headerStack} from 'universal/styles/fonts';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import check from './images/check.png';
import darkCheck from './images/dark-check.png';
import negative from './images/negative.png';

const baseFontSize = 20;

const styles = {
  checklistItem: {
    backgroundColor: bgGrey,
    padding: '.5em',
    margin: '1em 0px',
    fontFamily: bodyStack,
    fontSize: `${pxToEm(baseFontSize)}rem`,
    textAlign: 'left',
    position: 'relative'
  },
  text: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(25, baseFontSize)}em`,
    lineHeight: '1.25em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(25*.85, baseFontSize)}em`
    }
  },
  check: Object.assign({}, imgResponsive, centerBlock, {
    '@media (min-width: 768px)': {
      marginTop: '.5em'
    }
  })
};


@Radium
export default class BigChecklistItem extends Component {
  render() {
    const {
      title,
      desc,
      last,
      transparent,
      uppercaseTitle,
      negativeImg
    } = this.props;

    let checkImg = last ? darkCheck : check;
    let itemStyle = last ? Object.assign({}, styles.checklistItem, {backgroundColor: orange, color: white}) : styles.checklistItem;
    let textStyle = styles.text;

    if (transparent) {
      itemStyle = Object.assign({}, itemStyle, {
        backgroundColor: 'none'
      });
    }

    if (negativeImg) {
      checkImg = negative;
    }

    return (
      <div style={itemStyle}>
        <Grid fluid>
          <Row>
            <Col xs={3} sm={2} >
              <img style={styles.check} src={checkImg} alt="check" className="img-responsive"/>
            </Col>
            <Col xs={9} sm={10}>
              <span style={textStyle}>{this.props.children}</span>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
