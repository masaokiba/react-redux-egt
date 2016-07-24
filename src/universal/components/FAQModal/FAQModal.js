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
  dd: {
    marginBottom: '1em'
  }
};

export default class FAQModal extends React.Component {
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
        <Dialog title="Newsletter FAQ’s"
        actions={actions}
        modal
        open={this.state.open}
        autoScrollBodyContent >
        <dl>
          <dt>How do I unsubscribe from the Taylor Allan Training LTD. newsletters?</dt>
          <dd style={styles.dd}>
            We think you’ll be amazed by all the helpful insights you'll learn from the Taylor Allan Training LTD. newsletters. But you can easily stop receiving them at any time. Simply email helpdesk@eliteguardtraining.com. You can request removal. Once you do, you will no longer receive our newsletters in your inbox.<br/>
            (You can also unsubscribe by clicking the unsubscribe link at the bottom of any newsletter you’ve already received.)
          </dd>
          <dt>How often will I receive newsletters?</dt>
          <dd style={styles.dd}>You'll receive a daily email from Taylor Allan Training LTD, so you can count on getting new basketball tips and training daily. Be sure to add Taylor Allan Training LTD. to your "safe senders" list. That way, you’ll be sure to receive their messages in your inbox instead of them accidentally winding up in your spam folder.</dd>
          <dt>What will I learn from the newsletters that is not already on the site?</dt>
          <dd style={styles.dd}>Plenty! The info on the Taylor Allan Training LTD. site only give you a sneak peak of what you’ll learn about basketball through their newsletters.</dd>
          <dt>How will my personal information be used?</dt>
          <dd style={styles.dd}>Just like you, the Taylor Allan Training LTD Team are not a fan of spam. We only use the information you give us to send you your newsletters, and they’ll only come from Taylor Allan Training LTD. We will not sell or distribute your information to any third party, so there’s no need to worry you’ll be getting anything other than their newsletters. And of course, you can unsubscribe from those at any time by contacting us at helpdesk@eliteguardtraining.com.</dd>
          <dt>Who will I be receiving the newsletters from?</dt>
          <dd style={styles.dd}>Taylor Allan Training LTD. sends out all their newsletters themselves, so look out for helpdesk@eliteguardtraining.com in your inbox.</dd>
          <dt>Are the newsletters really free? Why?</dt>
          <dd style={styles.dd}>Absolutely. That’s because the Taylor Allan Training LTD. trainers think that to believe it, you have to read it. They know that once you read their pitching advice and discover how valuable it is, you’ll want to learn even more through their programs. But rest assured you are never obligated to buy anything at all. You can continue to only receive the newsletters – no catch, no strings, no bills.</dd>
          <dt>How do I contact you?</dt>
          <dd style={styles.dd}>Please feel free to share any comments and concerns with us. If you have any questions about this privacy policy or the practices of this Web site, please contact:
          <br/>
          <br/> Taylor Allan Training LTD.
          <br/> 5-555 Chablis Street
          <br/> Waterloo, Ontario
          <br/> N2T 2Y7
          <br/>
          <br/> or email us: <a href="mailto:helpdesk@eliteguardtraining.com">helpdesk@eliteguardtraining.com</a>
          </dd>
        </dl>
        </Dialog>
      </span>
    );
  }
}
