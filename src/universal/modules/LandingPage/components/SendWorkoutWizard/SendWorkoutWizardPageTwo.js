import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {RadioButton, RadioButtonGroup} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {verticalReaches} from 'universal/types/choices';
import {track, SELECTED_VERTICAL_REACH} from 'universal/utils/analytics';

import net from './images/Net.png';
import aboveTheRim from './images/above-the-rim.png';
import touchTheRim from './images/touch-the-rim.png';
import belowTheRim from './images/below-the-rim.png';

export const fields = ['verticalReach'];

const validate = values => {
  const errors = {};
  if (!values.verticalReach) {
    errors.verticalReach = 'Required';
  }
  return errors;
};

const styles = {
  fieldset: {
    border: 'none'
  },
  legend: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    border: 0,
    fontFamily: headerStack,
    fontSize: '1em',
    '@media (max-width: 768px)': {
      textAlign: 'center'
    },
    '@media (min-width: 768px)': {
      fontSize: '1.6em',
      marginTop: '1em'
    },
    '@media (min-width: 1200px)': {
      fontSize: '2em'
    }
  },
  verticalReachOptions: {
    paddingLeft: '1em'
  },
  radioButton: {
    marginBottom: '.5em'
  }
};

@reduxForm({
  form: 'sendWorkoutWizard',
  fields,
  validate,
  getFormState,
  destroyOnUnmount: false
})
@Radium
export default class SendWorkoutWizardPageTwo extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {verticalReach},
      handleSubmit,
    } = this.props;
    const selectedverticalReach = verticalReach.value || this.props.verticalReach || "";

    let radioChange = (event, data) => {
      verticalReach.onChange(data);
      setTimeout(() => handleSubmit());
      track(SELECTED_VERTICAL_REACH, {verticalReach: data});
    };

    return (<form>

        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle="success" now={33} label="Question 2 of 6"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} >
              <fieldset style={styles.fieldset} >
                <legend style={styles.legend}>Which area below best describes your current vertical? </legend>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={radioChange} valueSelected={selectedverticalReach}>

                  <RadioButton
                    {...verticalReach}
                    value={verticalReaches.ABOVE_THE_RIM.value}
                    label={verticalReaches.ABOVE_THE_RIM.display}
                    style={styles.radioButton}
                  />

                  <RadioButton
                    {...verticalReach}
                    value={verticalReaches.AT_THE_RIM.value}
                    label={verticalReaches.AT_THE_RIM.display}
                    style={styles.radioButton}
                  />

                  <RadioButton
                    {...verticalReach}
                    value={verticalReaches.BELOW_THE_RIM.value}
                    label={verticalReaches.BELOW_THE_RIM.display}
                    style={styles.radioButton}
                  />

                </RadioButtonGroup>
                {verticalReach.touched && verticalReach.error && <div className="help-block">{verticalReach.error}</div>}
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}

