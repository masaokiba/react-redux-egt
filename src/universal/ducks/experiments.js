import {fromJS, Map, List} from 'immutable';

export const SET_EXPERIMENT = 'SET_EXPERIMENT';

const initialState = Map({
  experiments: Map()
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_EXPERIMENT:
      return state.merge({
        experiments: state.get('experiments').merge(action.payload)
      })
    default:
      return state;
  }
}

export function setExperiment(key, experiment) {
  let payload = {};
  payload[key] = experiment;
  return {
    type: SET_EXPERIMENT,
    payload
  };
}
