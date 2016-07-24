import {fetchGraphQL} from '../utils/fetching';
import {fromJS, Map} from 'immutable';
import leadStorageOptions from '../utils/leadStorageOptions';
import cookie from 'react-cookie';
import {identify, alias, track, LEAD_CREATED, LEAD_RETURNED} from '../utils/analytics';

const {leadId, cookieLeadId} = leadStorageOptions;

export const CREATE_LEAD_REQUEST = 'CREATE_LEAD_REQUEST';
export const CREATE_LEAD_ERROR = 'CREATE_LEAD_ERROR';
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const SYNC_LEAD_REQUEST = 'SYNC_LEAD_REQUEST';
export const SYNC_LEAD_ERROR = 'SYNC_LEAD_ERROR';
export const SYNC_LEAD_SUCCESS = 'SYNC_LEAD_SUCCESS';

const initialState = Map({
  error: Map(),
  syncError: Map(),
  hasCreatedLead: false,
  creatingLead: false,
  syncingLead: false,
  hasSyncedLead: true,
  lead: Map({
    id: null,
    email: null,
    age: null,
    jumpFromPosition: null,
    jumpFromFeet: null,
    verticalReach: null,
    bodyType: null,
    score: 0,
    jumpType: null,
    createdAt: null,
    split: 0
  })
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_LEAD_REQUEST:
      return state.merge({
        error: Map(),
        creatingLead: true
      });
    case CREATE_LEAD_SUCCESS:
      return state.merge({
        error: Map(),
        hasCreatedLead: true,
        creatingLead: false,
        lead: fromJS(action.payload)
      });
    case CREATE_LEAD_ERROR:
      return state.merge({
        error: fromJS(action.error) || Map(),
        creatingLead: false,
        hasCreatedLead: false
      });
    case SYNC_LEAD_REQUEST:
      return state.merge({
        syncingLead: true,
        syncError: Map()
      });
    case SYNC_LEAD_SUCCESS:
      return state.merge({
        syncError: Map(),
        hasSyncedLead: true,
        syncingLead: false,
        lead: fromJS(action.payload)
      });
    case SYNC_LEAD_ERROR:
      return state.merge({
        syncError: fromJS(action.error) || Map(),
        syncingLead: false,
        hasSyncedLead: false
      });
    default:
      return state;
  }
}

export function createLeadSuccess(payload) {
  return {
    type: CREATE_LEAD_SUCCESS,
    payload
  };
}

export function createLeadError(error) {
  return {
    type: CREATE_LEAD_ERROR,
    error
  };
}

export function syncLeadError(error) {
  return {
    type: SYNC_LEAD_ERROR,
    error
  };
}

export function syncLeadSuccess(payload) {
  return {
    type: SYNC_LEAD_SUCCESS,
    payload
  };
}

const lead = `
{
  id,
  email,
  age,
  jumpFromPosition,
  jumpFromFeet,
  verticalReach,
  bodyType,
  score,
  jumpType,
  createdAt,
  split,
  source,
  keyword,
  listId,
  createdAsAbandon
}`;

export function createLead(dispatch, variables) {
  dispatch({type: CREATE_LEAD_REQUEST});
  return new Promise(async function (resolve, reject) {
    const query = `
    mutation($email: Email!, $age: String!, $jumpFromPosition: String!, $jumpFromFeet: String!, $verticalReach: String!, $bodyType: String!, $source: String, $keyword: String, $listId: String!){
      payload: createLead(email: $email, age: $age, jumpFromPosition: $jumpFromPosition, jumpFromFeet: $jumpFromFeet, verticalReach: $verticalReach, bodyType: $bodyType, source: $source, keyword: $keyword, listId: $listId)
      ${lead}
    }`;
    const {error, data} = await fetchGraphQL({query, variables});
    if (error) {
      dispatch(createLeadError(error));
      reject(error);
    } else {
      const {payload} = data;

      if (__CLIENT__) {
        localStorage && localStorage.setItem(leadId, payload.id);
        cookie && cookie.save(cookieLeadId, payload.id);

        // alias to user's id incase there were previous events
        alias(payload.email);
        // and identify
        identify(payload.email, payload);
        track(LEAD_CREATED, payload);
      }

      dispatch(createLeadSuccess(payload));
      resolve();
    }
  });
}

export const syncLead = async(dispatch, variables) => {
  dispatch({type: SYNC_LEAD_REQUEST});
  return new Promise(async (resolve, reject) => {
    const query = `
    query($id: ID!){
       payload: getLeadById(id: $id)
       ${lead}
    }`;
    const {error, data} = await fetchGraphQL({query, variables});
    if (error) {
      dispatch(syncLeadError(error));
      return reject(error);
    } else {
      const {payload} = data;
      dispatch(syncLeadSuccess(payload));

      if (__CLIENT__) {
        localStorage && localStorage.setItem(leadId, payload.id);
        cookie && cookie.save(cookieLeadId, payload.id);

        let analyticsData = Object.assign({}, payload, {
          url: window && window.location && window.location.pathname
        });
        alias(payload.email);
        identify(analyticsData.email, analyticsData);
        track(LEAD_RETURNED, analyticsData);
      }

      return resolve(payload);
    }
  });
};

export const syncLeadByEmail = (dispatch, variables) => {
  dispatch({type: SYNC_LEAD_REQUEST});
  return new Promise(async (resolve, reject) => {
    const query = `
    query($email: Email!){
       payload: getLeadByEmail(email: $email)
       ${lead}
    }`;
    const {error, data} = await fetchGraphQL({query, variables});
    if (error) {
      dispatch(syncLeadError(error));
      return reject(error);
    } else {
      const {payload} = data;
      dispatch(syncLeadSuccess(payload));

      if (__CLIENT__) {
        localStorage && localStorage.setItem(leadId, payload.id);
        cookie && cookie.save(cookieLeadId, payload.id);

        let analyticsData = Object.assign({}, payload, {
          url: window && window.location && window.location.pathname
        });
        alias(payload.email);
        identify(analyticsData.email, analyticsData);
        track(LEAD_RETURNED, analyticsData);
      }

      return resolve(payload);
    }
  });
};
