import {render} from 'react-dom';
import React from 'react';
import {Map, fromJS} from 'immutable';
import makeStore from './makeStore';
import Root from './Root';
import {syncHistoryWithStore} from 'react-router-redux';
import basenameHistory from './basenameHistory';
import {ensureState} from 'redux-optimistic-ui';
import {match} from 'react-router';
import routes from '../universal/routes/index';


const {
  auth,
  abandon,
  promo,
  navigator,
  routing,
  form,
  leads,
  identity,
  experiments,
  cart
} = window.__INITIAL_STATE__;

// form & routing are currently regular JS objects. This may change in the future
const initialState = Map([
  ['auth', fromJS(auth)],
  ['abandon', fromJS(abandon)],
  ['promo', fromJS(promo)],
  ['navigator', fromJS(navigator)],
  ['routing', routing],
  ['form', form],
  ['leads', fromJS(leads)],
  ['identity', fromJS(identity)],
  ['experiments', fromJS(experiments)],
  ['cart', fromJS(cart)]
]);

// Create the store:
const store = makeStore(initialState);
const history = syncHistoryWithStore(basenameHistory, store, {selectLocationState: state => ensureState(state).get('routing')});

match({ routes: routes(store), history }, (error, redirectLocation, renderProps) => {
  render(<Root store={store} {...renderProps} />, document.getElementById('root'));
});

// render(<Root store={store}/>, document.getElementById('root'));
