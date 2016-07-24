import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {RadioButton, RadioButtonGroup} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {jumpFromFeetOptions} from 'universal/types/choices';
import {track, SELECTED_JUMP_FEET} from 'universal/utils/analytics';

import jumpBody from './images/JUMP-BODY.png';
import oneFoot from './images/ONE-Rollover.png';
import twoFeet from './images/TWO-Rollover.png';

export const fields = ['jumpFromFeet'];

const validate = values => {
  const errors = {};
  if (!values.jumpFromFeet) {
    errors.jumpFromFeet = 'Required';
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
  jumpFromFeetOptions: {
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
export default class SendWorkoutWizardPageThree extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {jumpFromFeet},
      handleSubmit,
    } = this.props;
    const selectedjumpFromFeet = jumpFromFeet.value || this.props.jumpFromFeet || "";

    let radioChange = (event, data) => {
      jumpFromFeet.onChange(data);
      setTimeout(() => handleSubmit());
      track(SELECTED_JUMP_FEET, {jumpFromFeet: data});
    };

    return (<form>

        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle="success" now={50} label="Question 3 of 6"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} >
              <fieldset style={styles.fieldset} >
                <legend style={styles.legend}>Do you normally jump higher off one foot, or two? </legend>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={radioChange} valueSelected={selectedjumpFromFeet}>

                  <RadioButton
                    {...jumpFromFeet}
                    value={jumpFromFeetOptions.ONE_FOOT.value}
                    label={jumpFromFeetOptions.ONE_FOOT.display}
                    style={styles.radioButton}
                  />

                  <RadioButton
                    {...jumpFromFeet}
                    value={jumpFromFeetOptions.TWO_FEET.value}
                    label={jumpFromFeetOptions.TWO_FEET.display}
                    style={styles.radioButton}
                  />

                  <RadioButton
                    {...jumpFromFeet}
                    value={jumpFromFeetOptions.EQUAL.value}
                    label={jumpFromFeetOptions.EQUAL.display}
                    style={styles.radioButton}
                  />

                </RadioButtonGroup>
                {jumpFromFeet.touched && jumpFromFeet.error && <div className="help-block">{jumpFromFeet.error}</div>}
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}

