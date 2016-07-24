import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  'form': {
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
export default class ResetPasswordSuccess extends Component {
  render() {
    return (
      <div style={styles.form}>
        <h3>Password successfully reset</h3>
        <span style={styles.instructions}>Your password has been reset and you are now logged in</span>
      </div>
    );
  }
}
