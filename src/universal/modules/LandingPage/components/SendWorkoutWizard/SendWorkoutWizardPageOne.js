import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {RadioButton, RadioButtonGroup} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {bodyTypes} from 'universal/types/choices';
import {track, SELECTED_BODY_TYPE} from 'universal/utils/analytics';

import longAndLean from './images/BT1.png';
import longAndLeanRollover from './images/BT1-ROLLOVER.png';

import athleticBuild from './images/BT2.png';
import athleticBuildRollover from './images/BT2-ROLLOVER.png';

import stocky from './images/BT3.png';
import stockyRollover from './images/BT3-ROLLOVER.png';

export const fields = ['bodyType'];

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
  bodyTypeOptions: {
    paddingLeft: '1em'
  },
  radioButton: {
    marginBottom: '.5em'
  }
};
const validate = values => {
  const errors = {};
  if (!values.bodyType) {
    errors.bodyType = 'Required';
  }
  return errors;
};

@reduxForm({
  form: 'sendWorkoutWizard',
  fields,
  validate,
  getFormState,
  destroyOnUnmount: false
})
@Radium
export default class SendWorkoutWizardPageOne extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {bodyType},
      handleSubmit,
    } = this.props;
    const selectedbodyType = bodyType.value || this.props.bodyType || "";

    let radioChange = (event, data) => {
      bodyType.onChange(data);
      setTimeout(() => handleSubmit());
      track(SELECTED_BODY_TYPE, {bodyType: data});
    };

    return (<form>

        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle="success" now={16} label="Question 1 of 6"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} >
              <fieldset style={styles.fieldset} >
                <legend style={styles.legend}>Which best matches your body type?</legend>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={radioChange} valueSelected={selectedbodyType}>
                  <RadioButton
                    {...bodyType}
                    value={bodyTypes.LONG_AND_LEAN.value}
                    label={bodyTypes.LONG_AND_LEAN.display}
                    style={styles.radioButton}
                  />
                  <RadioButton
                    {...bodyType}
                    value={bodyTypes.ATHLETIC_BUILD.value}
                    label={bodyTypes.ATHLETIC_BUILD.display}
                    style={styles.radioButton}
                  />
                  <RadioButton
                    {...bodyType}
                    value={bodyTypes.STOCKY.value}
                    label={bodyTypes.STOCKY.display}
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
                {bodyType.touched && bodyType.error && <div className="help-block">{bodyType.error}</div>}
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}

