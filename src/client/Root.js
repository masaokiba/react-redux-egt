import React, {Component} from 'react';
import {Router, useRouterHistory, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from '../universal/routes/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {ensureState} from 'redux-optimistic-ui';
import basenameHistory from './basenameHistory';
import {setExperiment} from '../universal/ducks/experiments';

export default class Root extends Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const {
      store
    } = this.props;
    window.experiment = (key, value) => {
      store.dispatch(setExperiment(key, value));
    };
  }

  render() {
    const {store} = this.props;
    const history = syncHistoryWithStore(basenameHistory, store, {selectLocationState: state => ensureState(state).get('routing')});
    return (
      <Provider store={store}>
        <div>
          <Router onUpdate={() => window.scrollTo(0, 0)} history={history} routes={routes(store)}/>
        </div>
      </Provider>
    );
  }
}

// ********* Optimizely Experiment Snippet ******
// var startExperiment = setInterval(function() {
//    if (typeof experiment !== 'function') {
//       return;
//    }
//    experiment('header', 'feel-dunk');
//    clearInterval(startExperiment);
// }, 100);
