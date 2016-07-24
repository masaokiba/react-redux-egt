import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {headerStack, accuBlack} from 'universal/styles/fonts';
import pxToEm from 'universal/utils/pxToEm';
import headerBg from './images/Orange-Header.png';
import Radium from 'radium';

const headingText = 42;

const headingTextCommon = {
  fontFamily: headerStack,
  fontWeight: 300,
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: `${pxToEm(headingText-8)}rem`,
  lineHeight: `${pxToEm(59.729, headingText)}em`,
  '@media (min-width: 768px)': {
    fontSize: '36px'
  },
  '@media (min-width: 992px)': {
    fontSize: '48px'
  },
  '@media (min-width: 1200px)': {
    fontSize: `${pxToEm(headingText)}rem`
  }
};

const styles = {
  'headerRow': {
    textAlign: 'center',
    backgroundImage: `url(${headerBg})`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '77% 100%'
  },
  trainYou: Object.assign({}, headingTextCommon, {
    fontSize: `${pxToEm(headingText-12)}rem`,
  }),
  feelDunk: Object.assign({}, headingTextCommon, {
    fontSize: `${pxToEm(headingText-8)}rem`,
  }),
  finallyDunking: Object.assign({}, headingTextCommon, {
    marginTop: '.5em',
    fontSize: `${pxToEm(headingText-16)}rem`,
  }),
  'jumpHack': {
    fontFamily: headerStack,
    fontWeight: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '.1em',
    fontSize: `${pxToEm(headingText-16)}rem`,
    lineHeight: `${pxToEm(50, headingText)}em`,
    '@media (min-width: 768px)': {
      fontSize: '36px'
    },
    '@media (min-width: 992px)': {
      fontSize: '48px'
    },
    '@media (min-width: 1200px)': {
      fontSize: `${pxToEm(headingText)}rem`
    }
  },
  'emphasis': {
    textDecoration: 'underline',
    color: '#F7C520',
    fontWeight: accuBlack,
    textTransform: 'uppercase'
  },
  'emphasisAlt': {
    fontStyle: 'italic',
    fontWeight: 600
  },
  small: {
    fontSize: '60%',
    lineHeight: '1em',
    marginBottom: '.25em',
    textTransform: 'uppercase'
  }
};

@Radium
export default class Header extends Component {
  render() {
    return (
      <Row style={styles.headerRow}>
        <Col sm={10} smOffset={1} lg={8} lgOffset={2}>

          <h1 style={styles.trainYou}>
            He Trained These <span style={styles.emphasis}>NBA Dunkers</span> <br/>
            When They Were In High School… <br/>
            Now, He Wants To <span style={styles.emphasisAlt}>Train You</span>
          </h1>

        </Col>
      </Row>
    );
  }
}
