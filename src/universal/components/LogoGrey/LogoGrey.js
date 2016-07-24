import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {headerStack, accuBlack} from 'universal/styles/fonts';
import {black, white} from 'universal/styles/colors';
import pxToEm from 'universal/utils/pxToEm';
import Radium from 'radium';
import logo from 'universal/images/logo-grey.png';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 100
  },
  header: {
    paddingTop: 5,
    textAlign: 'center'
  },
  brand: Object.assign({}, imgResponsive, {
    display: 'inline-block'
  })
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
          <img style={styles.brand} src={logo} alt="logo"/>
        </header>
      </div>
    );
  }
}
