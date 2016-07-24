import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {getFormState} from 'universal/redux/helpers';
import {Button, Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import Radium from 'radium';
import {TextField} from 'material-ui';
import {headerStack} from 'universal/styles/fonts';
import {landingPageButton} from 'universal/styles/buttons';

export const fields = [
  'bodyType',
  'verticalReach',
  'jumpFromFeet',
  'jumpFromPosition',
  'age',
  'email'
];

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is Required';
  }
  return errors;
};

const styles = {
  'fieldset': {
    border: 'none'
  },
  'legend': {
    border: 0,
    fontFamily: headerStack,
    textAlign: 'center',
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
  textField: {
    width: '100%',
    fontSize: '1em',
    fontFamily: headerStack,
    marginTop: 0,
    marginBottom: '1em',
    '@media (min-width: 768px)': {
      fontSize: '1.4em'
    }
  },
  'emailInput': {
    display: 'block'
  },
  'button': Object.assign({}, landingPageButton, {
    maxWidth: '100%',
    width: '100%',
    marginTop: '1.5em',
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 768px)': {
      marginTop: '.75em',
      marginBottom: '.75em'
    },
    '@media (max-width: 768px)': {
      fontSize: '16px'
    }
  })
};

@reduxForm({
  form: 'sendWorkoutWizard',
  fields,
  validate,
  getFormState,
  destroyOnUnmount: false
})
@Radium
export default class SendWorkoutWizardPageSix extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const {
      fields: {email},
      handleSubmit,
      previousPage,
      submitting,
      createLeadError,
      } = this.props;
    const creationError = createLeadError && createLeadError._error;

    return (<form onSubmit={handleSubmit}>

        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle="success" now={100} label="Question 6 of 6"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>
                  Where should we send your workout?
                </legend>
                <div>
                  <TextField
                    type="email"
                    {...email}
                    hintText="Enter your best email..."
                    floatingLabelText="Enter your best email..."
                    errorText={(email.touched && (email.error || creationError)) && email.error || creationError}
                    style={styles.textField}
                    inputStyle={styles.emailInput}
                  />
                </div>
                <div>
                  <button type="submit"
                    style={styles.button}
                    disabled={submitting} >
                    {submitting ? <i className="fa fa-cog fa-spin"/> : <i className="fa fa-paper-plane"/>} Get Instant Access
                  </button>
                </div>
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}
