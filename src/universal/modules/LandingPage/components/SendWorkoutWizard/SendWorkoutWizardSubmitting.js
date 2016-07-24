import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Button, Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {headerStack} from 'universal/styles/fonts';

const styles = {
  'formRow': {
    marginTop: '1em',
    marginBottom: '1em'
  },
  'text': {
    border: 0,
    fontFamily: headerStack,
    fontSize: '2em',
    textAlign: 'center'
  }
};


@Radium
export default class SendWorkoutWizardSubmitting extends Component {
  render() {

    return (<div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle="success" now={100} label="%(percent)s% Complete"/>
            </Col>
          </Row>
          <Row style={styles.formRow}>
            <Col xs={12}>
              <h1 style={styles.text}>Submitting...</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
