import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  'resetEmailForm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  'instructions': {
    fontWeight: 500,
    fontSize: '1.2em',
    marginBottom: 16
  }
};

@Radium
export default class ResetEmailSent extends Component {
  render() {
    return (
      <div style={styles.resetEmailForm}>
        <h3>Reset Email Sent</h3>
        <span style={styles.instructions}>Please check your inbox for directions on resetting your password</span>
      </div>
    );
  }
}
