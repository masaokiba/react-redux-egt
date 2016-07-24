import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {headerStack, accuBlack} from 'universal/styles/fonts';
import {black, white} from 'universal/styles/colors';
import pxToEm from 'universal/utils/pxToEm';
import Radium from 'radium';
import logo from 'universal/images/egtLogo.png';
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';


const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 100
  },
  header: {
    paddingTop: 5,
    background: black
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '7px',
    float: 'left'
  }),
  nav: {
    background: 'linear-gradient(to bottom,#444 0%,#222222 100%)',
  },
  link: {
    display: 'inline-block',
    padding: '.1em 1em .2em 1em',
    fontFamily: headerStack,
    fontWeight: accuBlack,
    color: '#999',
    fontSize: '1.2em',
    textTransform: 'uppercase',
    ':hover': {
      background: black,
      color: white,
      textDecoration: 'none'
    },
    '@media (max-width: 768px)': {
      fontSize: '1em'
    },
  }
};

@Radium
export default class NavbarHeader extends Component {
  render() {
    const {
      experiment
    } = this.props;

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
          <Grid>
            <Row>
              <Col xs={6}>
                <img style={styles.brand} src={logo} alt="logo"/>
              </Col>
              <Col xs={6}>
                <PhoneNumber/>
              </Col>
            </Row>
          </Grid>
        </header>
        <nav style={styles.nav}>
          <Grid>
            <Row>
              <Col xs={12}>
                <a ref='about' style={styles.link} href="/about" target="_blank">About</a>
                <a ref='faq' style={styles.link} href="/faqs" target="_blank">FAQ</a>
                <a ref='contact' style={styles.link} href="/contact" target="_blank">Contact</a>
              </Col>
            </Row>
          </Grid>
        </nav>
      </div>
    );
  }
}
