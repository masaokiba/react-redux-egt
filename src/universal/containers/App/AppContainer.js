import React, {PropTypes, Component} from 'react';
import App from '../../components/App/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {connect} from 'react-redux';
import socketOptions from 'universal/utils/socketOptions';
import loginWithToken from '../../decorators/loginWithToken/loginWithToken';
import leadStorageOptions from 'universal/utils/leadStorageOptions';
import syncLead from '../../decorators/syncLead/syncLead';
import {ensureState} from 'redux-optimistic-ui';
import Radium, {Style, StyleRoot} from 'radium';
import normalize from 'radium-normalize';
import {styles as bsStyles} from 'universal/styles/bootstrapStyles';
import {setSuperProps, track, timing, ENTERED_FUNNEL, VIEWED_MULTIVARIANT_EXPERIMENT} from 'universal/utils/analytics';

injectTapEventPlugin();
@connect(mapStateToProps)
@loginWithToken(socketOptions.authTokenName)
@syncLead(leadStorageOptions.leadId)
@Radium
export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    radiumConfig: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {
      utm_source,
      utm_term,
      utm_campaign,
      utm_content,
      experiments
    } = this.props;

    // Feature detects Navigation Timing API support.
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now());

      // Sends the timing hit to Google Analytics.
      timing('AppContainer', 'mounted', timeSincePageLoad);
    }

    let superProps = {};
    if (utm_source) {
      superProps.utm_source = utm_source;
    }
    if (utm_term) {
      superProps.utm_term = utm_term;
    }
    if (utm_campaign) {
      superProps.utm_campaign = utm_campaign;
    }
    if (utm_content) {
      superProps.utm_content = utm_content;
    }

    setSuperProps(superProps);
    track(ENTERED_FUNNEL);

    // Analytics:
    // Multivariant (SHOULD BE FIRST)
    if (experiments) {
      let multvariantString = "";
      const experimentsObj = experiments.toJS();
      const experimentsArray = Object.keys(experimentsObj).sort();
      let count = 0;
      experimentsArray.map((experiment) => {
        count = count + 1;
        let stringEnd = count === experimentsArray.length ? '' : ' | ';
        multvariantString = `${multvariantString}${experiment}: ${experiments.get(experiment)}${stringEnd}`;
      });
      track(VIEWED_MULTIVARIANT_EXPERIMENT, {
        multivariant: multvariantString
      });
    };
  }

  render() {
    return (<StyleRoot>
      <Style rules={normalize}/>
      <Style rules={bsStyles}/>
      <App {...this.props}/>
    </StyleRoot>);
  }
}

function mapStateToProps(state, props) {
  const experiments = state.get('experiments');

  return {
    isAuthenticated: ensureState(state).getIn(['auth', 'isAuthenticated']),
    radiumConfig: {userAgent: state.getIn(['navigator', 'userAgent'])},
    lead: state.getIn('leads', 'lead'),
    experiments: experiments.get('experiments') || null,
    utm_source: props.location.query.source || props.location.query.utm_source,
    utm_term: props.location.query.keyword || props.location.query.utm_term,
    utm_campaign: props.location.query.utm_campaign,
    utm_content: props.location.query.utm_content
  };
}
