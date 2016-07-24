import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {headerStack, accuBlack} from 'universal/styles/fonts';
import {black, white, bgGrey} from 'universal/styles/colors';
import pxToEm from 'universal/utils/pxToEm';
import Radium from 'radium';
import logo from 'universal/images/egtLogo.png';
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import headerImg from './images/checkout-tabs-leftactive.png';

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 20
  },
  header: {
    paddingTop: 5,
    backgroundColor: bgGrey,
    backgroundImage: `url(${headerImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: 64,
    '@media (max-width: 991px)': {
      height: 40
    }
  }
};

@Radium
export default class LogoPhoneHeader extends Component {
  render() {
    const {
      experiment
    } = this.props;

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
        </header>
      </div>
    );
  }
}
