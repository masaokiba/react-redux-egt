import React, {PropTypes, Component} from 'react';
import LandingPage from '../../components/LandingPage/LandingPage';
import {connect} from 'react-redux';
import {ensureState} from 'redux-optimistic-ui';
import {getValues} from 'redux-form';
import {alias, identify} from 'universal/utils/analytics';

@connect(mapStateToProps)
export default class LandingPageContainer extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    creatingLead: PropTypes.bool.isRequired,
    hasCreatedLead: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const {
      identity,
      lead
    } = this.props;

    if (identity) {
      // identity comes from server, create an alias with it to
      // correlate server events with user
      alias(identity);

      // if we have a lead already, we can identify now
      if (lead && lead.email) {
        identify(lead.email);
      }

    }
  }

  render() {
    const listId = '42528';
    return <LandingPage {...this.props} listId={listId}/>;
  }
}

function mapStateToProps(state, props) {
  state = ensureState(state);
  const auth = state.get('auth');
  const leads = state.get('leads');
  const form = state.get('form');
  const experiments = state.get('experiments');
  const formValues = getValues(form.sendWorkoutWizard);
  const analytics = state.get('analytics');

  return Object.assign({
    isAuthenticated: ensureState(state).getIn(['auth', 'isAuthenticated']),
    isAuthenticating: auth.get('isAuthenticating'),
    pathname: props.location.pathname,
    hasCreatedLead: leads.get('hasCreatedLead'),
    creatingLead: leads.get('creatingLead'),
    createLeadError: leads.get('error').toJS(),
    lead: leads.get('lead').toJS(),
    experiments: experiments.get('experiments') || null,
    identity: analytics.get('identity'),
    funnel: analytics.get('funnel')
  }, formValues);
}

function validate(values) {
  return true;
}
