import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import {orange, white, black, bgGrey} from 'universal/styles/colors';
import {headerStack, bodyStack, proxReg, proxSemiBold, accuBold, accuBlack} from 'universal/styles/fonts';
import {centerBlock, imgResponsive} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';
import Section from 'universal/components/Section/Section';

import img from './images/step1-imac.png';
import optionsTable from './images/STEP-1-TABLE.png';

const baseFontSize = 20;

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    '@media (max-width: 767px)': {
      textAlign: 'center'
    }
  },
  h3: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    color: orange,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.25em',
    marginTop: '1em',
    lineHeight: '1em'
  },
  h2: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    color: orange,
    fontSize: `${pxToEm(40, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.5em',
    marginTop: '1em',
    lineHeight: '1em'
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(50, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '.5em',
    lineHeight: '1em'
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  p: {
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  }
};

@Radium
export default class StepOne extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      phase,
    } = this.props;

    return (
      <Section customStyles={styles.section} even>
        <Grid>
          <Row>
            <Col xs={12} >

              <Grid fluid>
                <Row>
                  <Col sm={5}>
                    <img style={styles.img} src={img} alt=""/>
                  </Col>
                  <Col sm={7}>
                    <h3 style={styles.h3}>Step #1:</h3>
                    <h1 style={styles.h1}>Pick Your Training Program</h1>
                    <p style={styles.p}>Drew has broken the EGT system down into specific training programs for every age and skill level, as well as time of year. Simply tell us your stats, and we&#8217;ll give you the perfect training program for your individual needs.</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <h2 style={styles.h2}>Which Program Will You Use?</h2>
                    <img style={styles.img} src={optionsTable} alt="" />
                  </Col>
                </Row>
              </Grid>

            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
