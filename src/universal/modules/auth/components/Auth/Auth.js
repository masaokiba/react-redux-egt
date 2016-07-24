import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {Link} from 'react-router';
import {loginUser, signupUser, oauthLogin} from '../../ducks/auth';
import Radium from 'radium';

const styles = {
  'loginForm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  'loginButton': {
    paddingTop: 24
  },
  'lostPassword': {
    marginTop: 16,
    fontSize: '.8em',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    fontWeight: 500,
    color: 'primary'
  },
  'hrWithText': {
    margin: 16,
    borderBottom: 'darkgrey 1px solid',
    height: '1.25em',
    lineHeight: '2.5em',
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  'hrText': {
    background: 'white',
    padding: 8
  }
};


@Radium
export default class Auth extends Component {
  static PropTypes = {
    location: PropTypes.object,
    isAuthenticating: PropTypes.bool.isRequired,
    authError: PropTypes.shape({
      _error: PropTypes.string.isRequired,
      email: PropTypes.string,
      password: PropTypes.string
    }),
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const {fields: {email, password}, handleSubmit, isLogin, error, isAuthenticating, authError} = this.props;
    const localError = error || authError._error;
    return (
      <div style={styles.loginForm}>
        <h3>{isLogin ? 'Login' : 'Sign up'}</h3>
        {localError && <span>{localError}</span>}
        <form style={styles.loginForm} onSubmit={handleSubmit(this.onSubmit)}>
          <input style={{display: 'none'}} type="text" name="chromeisabitch"/>

          <TextField {...email}
            type="text"
            hintText="name@email.com"
            errorText={email.touched && email.error || ''}
            floatingLabelText="Email"
          />
          <input style={{display: 'none'}} type="text" name="chromeisabitch"/>

          <TextField {...password}
            type="password"
            floatingLabelText="Password"
            hintText="hunter2"
            errorText={password.touched && password.error || ''}
          />

          {isLogin ?
            <Link to={{pathname: "/login/lost-password", query: {e:email.value}}} style={styles.lostPassword}>
              Forgot your password?
            </Link> : null}

          <div style={styles.loginButton}>
            <RaisedButton
              label={isLogin ? 'Login' : 'Sign up'}
              secondary
              type="submit"
              disabled={isAuthenticating}
              onClick={handleSubmit(this.onSubmit)}
            />

          </div>
        </form>
      </div>
    );
  }
  // need async?
  loginWithGoogle = () => {
    const redirectRoute = this.props.location.query.next || '/';
    this.props.dispatch(oauthLogin('/auth/google', redirectRoute));
  };

  onSubmit = (data, dispatch) => {
    // gotta get that redirect from props
    const redirectRoute = this.props.location.query.next || '/';
    const authFunc = this.props.isLogin ? loginUser : signupUser;
    return authFunc(dispatch, data, redirectRoute);
  };
}
