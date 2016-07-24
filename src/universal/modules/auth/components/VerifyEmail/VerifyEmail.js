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
export default class VerifyEmail extends Component {
  render() {
    const {error, isVerified} = this.props;
    let status;
    if (error && error._error) {
      status = `There was an error verifying your email: ${error._error}`;
    } else {
      status = isVerified ? 'Your email has been verified. Thank you!' : 'Your email is currently being verified...';
    }

    return (
      <div style={styles.form}>
        <h3>Verifying Email</h3>
        <span style={styles.instructions}>{status}</span>
      </div>
    );
  }
}
