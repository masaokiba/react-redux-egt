import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {reduxForm} from 'redux-form';
import Joi from 'joi';
import {authSchemaPassword} from '../../schemas/auth';
import {resetPassword} from '../../ducks/auth';
import {parsedJoiErrors} from 'universal/utils/schema';
import {getFormState} from 'universal/redux/helpers';
import Radium from 'radium';

const styles = {
  'resetPasswordForm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  'resetPasswordButton': {
    paddingTop: 24
  },
  'instructions': {
    fontWeight: 500,
    fontSize: '1.2em',
    marginBottom: 16
  }
};


@reduxForm({form: 'resetPasswordForm', fields: ['password'], validate, getFormState})
@Radium
export default class ResetPassword extends Component {
  render() {
    const {fields: {password}, error, handleSubmit, submitting} = this.props;
    return (
      <div style={styles.resetPasswordForm}>
        <h3>Reset your password</h3>
        <span style={styles.instructions}>Please type your new password here</span>
        {error && <span>{error}</span>}
        <form style={styles.resetPasswordForm} onSubmit={handleSubmit(this.onSubmit)}>
          <input style={{display:'none'}} type="text" name="chromeisabitch"/>

          <TextField {...password}
            type="password"
            floatingLabelText="Password"
            hintText="hunter2"
            errorText={password.touched && password.error || ''}
          />
          <input style={{display:'none'}} type="text" name="javascriptDisabled"/>
          <div style={styles.resetPasswordButton}>
            <RaisedButton
              label="Set new password"
              secondary
              type="submit"
              disabled={submitting}
              onClick={handleSubmit(this.onSubmit)}
            />
          </div>
        </form>
      </div>
    );
  }
  onSubmit = (data, dispatch) => {
    const {resetToken} = this.props.params;
    const outData = Object.assign({}, data, {resetToken});
    return resetPassword(outData, dispatch);
  };
}

function validate(values) {
  const results = Joi.validate(values, authSchemaPassword, {abortEarly: false});
  return parsedJoiErrors(results.error);
}
