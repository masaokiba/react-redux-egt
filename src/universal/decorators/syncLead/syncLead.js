import React, {Component} from 'react';
import {syncLead, syncLeadByEmail} from '../../ducks/leads';

export default leadIdKey => ComposedComponent => {
  return class TokenizedComp extends Component {
    componentWillMount() {
      if (__CLIENT__) {
        const leadId = localStorage && localStorage.getItem(leadIdKey);

        if (leadId) {
          return syncLead(this.props.dispatch, {id: leadId});
        }

        if (this.props.location && this.props.location.query && this.props.location.query.uniqueid) {
          return syncLead(this.props.dispatch, {id: this.props.location.query.uniqueid});
        }

        if (this.props.location && this.props.location.query && this.props.location.query.contact) {
          return syncLeadByEmail(this.props.dispatch, {email: this.props.location.query.contact});
        }

        if (this.props.location && this.props.location.query && this.props.location.query['contact_fields[email]']) {
          return syncLeadByEmail(this.props.dispatch, {email: this.props.location.query['contact_fields[email]']});
        }
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  };
};
