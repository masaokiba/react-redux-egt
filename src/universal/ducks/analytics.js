import {Map} from 'immutable';

export const SET_IDENTITY = 'SET_IDENTITY';
export const SET_FUNNEL = 'SET_FUNNEL';

const initialState = Map({
  identity: "",
  funnel: ""
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IDENTITY:
      return state.merge({
        identity: action.identity
      });
    case SET_FUNNEL:
      return state.merge({
        funnel: action.funnel
      });
    default:
      return state;
  }
}

export function setIdentity(identity) {
  return {
    type: SET_IDENTITY,
    identity: identity
  };
}

export function setFunnel(funnel) {
  return {
    type: SET_FUNNEL,
    funnel: funnel
  };
}
