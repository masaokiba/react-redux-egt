import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {headerStack, accuBlack} from 'universal/styles/fonts';
import {black, white} from 'universal/styles/colors';
import pxToEm from 'universal/utils/pxToEm';
import Radium from 'radium';
import logo from 'universal/images/logo-fill.png';
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
  })
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
          <Grid>
            <Row>
              <Col xs={6}>
                <img style={styles.brand} src={logo} alt="logo"/>
              </Col>
              <Col xs={6}>
                <PhoneNumber fill/>
              </Col>
            </Row>
          </Grid>
        </header>
      </div>
    );
  }
}
