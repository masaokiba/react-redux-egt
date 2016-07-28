import {reducer as form} from 'redux-form';
import {compose} from 'redux';
import {combineReducers} from 'redux-immutablejs';
import auth from '../modules/auth/ducks/auth';
import navigator from '../ducks/navigator';
import leads from '../ducks/leads';
import promo from '../ducks/promo';
import abandon from '../ducks/abandon';
import experiments from '../ducks/experiments';
import analytics from '../ducks/analytics';
import cart from '../ducks/cart';
import {routing} from './routing';

const currentReducers = {
  auth,
  leads,
  navigator,
  routing,
  form,
  promo,
  abandon,
  experiments,
  analytics,
  cart
};

export default (newReducers, reducerEnhancers) => {
  Object.assign(currentReducers, newReducers);
  const reducer = combineReducers({...currentReducers});
  if (reducerEnhancers) {
    return Array.isArray(reducerEnhancers) ? compose(...reducerEnhancers)(reducer) : reducerEnhancers(reducer);
  }
  return reducer;
};
