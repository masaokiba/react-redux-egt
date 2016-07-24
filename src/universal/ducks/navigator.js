import {fromJS, Map} from 'immutable';

export const SET_USER_AGENT = 'SET_USER_AGENT';

const initialState = Map({
  userAgent: "",
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER_AGENT:
      let mergedState = state.merge({
        userAgent: action.userAgent
      });
      return mergedState;
    default:
      return state;
  }
}

export function setUserAgent(userAgent) {
  return {
    type: SET_USER_AGENT,
    userAgent: userAgent
  };
}
