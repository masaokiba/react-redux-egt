import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {RadioButton, RadioButtonGroup} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {jumpFromPositions} from 'universal/types/choices';
import {track, SELECTED_JUMP_POSITION} from 'universal/utils/analytics';

import run from './images/RUN-Rollover.png';
import runRollover from './images/RUN-Rollover.png';

import still from './images/STILL.png';
import stillRollover from './images/STILL-Rollover.png';

import equal from './images/EQUAL-Figures.png';
import equalRollover from './images/EQUAL-Rollover.png';

export const fields = ['jumpFromPosition'];

const validate = values => {
  const errors = {};
  if (!values.jumpFromPosition) {
    errors.jumpFromPosition = 'Required';
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
  jumpFromPositionOptions: {
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
export default class SendWorkoutWizardPageFour extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {jumpFromPosition},
      handleSubmit,
    } = this.props;
    const selectedjumpFromPosition = jumpFromPosition.value || this.props.jumpFromPosition || "";

    let radioChange = (event, data) => {
      jumpFromPosition.onChange(data);
      setTimeout(() => handleSubmit());
      track(SELECTED_JUMP_POSITION, {jumpFromPosition: data});
    };

    return (<form>

          <Grid fluid>
          <Row>
          <Col xs={12}>
          <ProgressBar bsStyle="success" now={66} label="Question 4 of 6"/>
          </Col>
          </Row>
          <Row>
          <Col xs={12} >
          <fieldset style={styles.fieldset} >
          <legend style={styles.legend}>Do you jump higher off the run, or can you normally jump just as high from a stand still? </legend>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={radioChange} valueSelected={selectedjumpFromPosition}>

          <RadioButton
            {...jumpFromPosition}
            value={jumpFromPositions.RUN.value}
            label={jumpFromPositions.RUN.display}
            style={styles.radioButton}
          />

          <RadioButton
            {...jumpFromPosition}
            value={jumpFromPositions.STAND_STILL.value}
            label={jumpFromPositions.STAND_STILL.display}
            style={styles.radioButton}
          />

          <RadioButton
            {...jumpFromPosition}
            value={jumpFromPositions.EQUAL.value}
            label={jumpFromPositions.EQUAL.display}
            style={styles.radioButton}
          />

          </RadioButtonGroup>
          {jumpFromPosition.touched && jumpFromPosition.error && <div className="help-block">{jumpFromPosition.error}</div>}
          </fieldset>
          </Col>
          </Row>
          </Grid>
          </form>
         );
  }
}

