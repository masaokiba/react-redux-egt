import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {RadioButton, RadioButtonGroup} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {ages} from 'universal/types/choices';
import {track, SELECTED_AGE} from 'universal/utils/analytics';

export const fields = ['age'];

const validate = values => {
  const errors = {};
  if (!values.age) {
    errors.age = 'Required';
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
  ageOptions: {
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
export default class SendWorkoutWizardPageFive extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {age},
      handleSubmit,
    } = this.props;
    const selectedage = age.value || this.props.age || "";

    let radioChange = (event, data) => {
      age.onChange(data);
      setTimeout(() => handleSubmit());
      track(SELECTED_AGE, {age: data});
    };

    return (<form>

          <Grid fluid>
          <Row>
          <Col xs={12}>
          <ProgressBar bsStyle="success" now={83} label="Question 5 of 6"/>
          </Col>
          </Row>
          <Row>
          <Col xs={12} >
          <fieldset style={styles.fieldset} >
          <legend style={styles.legend}>How old are you?</legend>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={radioChange} valueSelected={selectedage}>

          <RadioButton
            {...age}
            value={ages.YOUNGER_THAN_13.value}
            label={ages.YOUNGER_THAN_13.display}
            style={styles.radioButton}
          />

          <RadioButton
            {...age}
            value={ages.BETWEEN_14_AND_18.value}
            label={ages.BETWEEN_14_AND_18.display}
            style={styles.radioButton}
          />

          <RadioButton
            {...age}
            value={ages.OLDER_THAN_18.value}
            label={ages.OLDER_THAN_18.display}
            style={styles.radioButton}
          />

          </RadioButtonGroup>
          {age.touched && age.error && <div className="help-block">{age.error}</div>}
          </fieldset>
          </Col>
          </Row>
          </Grid>
          </form>
         );
  }
}
