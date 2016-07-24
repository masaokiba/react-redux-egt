import React, {Component, PropTypes} from 'react';
import {FlatButton, Dialog} from 'material-ui';
import shallowCompare from 'react-addons-shallow-compare';
import {white} from 'universal/styles/colors';

const styles = {
  link: {
    color: white,
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  pFirst: {
    marginTop: 0
  }
};

export default class DisclaimerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Close"
        primary
        onTouchTap={this.handleClose}
      />
    ];

    const color = this.props.color || white;
    const linkStyle = Object.assign({}, styles.link, {
      color
    });


    return (
      <span>
        <a style={linkStyle} onTouchTap={this.handleOpen} >
          {this.props.children}
        </a>
        <Dialog title="Taylor Allan’s Personal Disclaimer"
          actions={actions}
          modal
          open={this.state.open}
          autoScrollBodyContent >
          <p style={styles.pFirst}>Please consult a physician and follow all safety instructions before starting any training, exercise of conditioning program. As with any program there is risk of injury and lack of success.</p>
          <p>Every effort has been made to accurately represent our products, services and its potential Results featured on this site ane NOT typical. These are players who have followed instructions as outlined. We have made every effort to validate the testimonials, results, and success stories of the players featured on this site. Each player's success is depends on their dedication, commitment, motivation and work ethic.</p>
          <p>No Guarantee of success, results, or level of achievement can be made.</p>
          <p>I want to be extremely transparent. I make our living as independent basketball consultants. We are offering our newsletter free of charge in hopes of you considering our services to help you with your basketball training.</p>
          <p>You should assume that we have motivation for linking to everything on this site and will benefit from it somehow. You should assume I am no better than traditional instructors. I encourage you to questions or methods and philosophy.</p>
        </Dialog>
      </span>
    );
  }
}
