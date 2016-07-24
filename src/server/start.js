import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Map as iMap} from 'immutable';
import makeReducer from '../universal/redux/makeReducer';
import startExperiments from './experiments/startExperiments';
import createSSR from './createSSR';
import winston from 'winston';

export default function start(req, res) {
  winston.log('info', 'request for application');
  const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
  const store = finalCreateStore(makeReducer(), iMap());

  return startExperiments(req, res, createSSR, store);
}
