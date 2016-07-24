import {fetchGraphQL} from '../utils/fetching';
import {fromJS, Map} from 'immutable';

export const ADD_TO_ABANDON_LIST = 'ADD_TO_ABANDON_LIST';
export const ADD_TO_ABANDON_LIST_ERROR = 'ADD_TO_ABANDON_LIST_ERROR';
export const ADD_TO_ABANDON_LIST_SUCCESS = 'ADD_TO_ABANDON_LIST_SUCCESS';


const initialState = Map({
  error: Map(),
  hasCreatedAbandonLead: false,
  creatingAbandonLead: false,
  abandonLead: Map({
    id: null,
    email: null,
    abandonListId: null,
    productId: null,
    maropost: Map()
  })
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_ABANDON_LIST:
      return state.merge({
        error: Map(),
        creatingAbandonLead: true
      });
    case ADD_TO_ABANDON_LIST_SUCCESS:
      return state.merge({
        error: Map(),
        hasCreatedAbandonLead: true,
        creatingAbandonLead: false,
        abandonLead: fromJS(action.payload)
      });
    case ADD_TO_ABANDON_LIST_ERROR:
      return state.merge({
        error: fromJS(action.error) || Map(),
        creatingAbandonLead: false,
        hasCreatedAbandonLead: false,
        abandonLead: Map()
      });
    default:
      return state;
  }
}

export function addToAbandonListSuccess(payload) {
  return {
    type: ADD_TO_ABANDON_LIST_SUCCESS,
    payload
  };
}

export function addToAbandonListError(error) {
  return {
    type: ADD_TO_ABANDON_LIST_ERROR,
    error
  };
}

const abandonLead = `
{
  id,
  email,
  abandonListId
}`;

export function addToAbandonList(dispatch, variables) {
  dispatch({type: ADD_TO_ABANDON_LIST});
  return new Promise(async function (resolve, reject) {

    const query = `
    mutation($email: Email!, $abandonListId: String!){
      payload: addToAbandonList(email: $email, abandonListId: $abandonListId)
      ${abandonLead}
    }`;

    const {error, data} = await fetchGraphQL({query, variables});
    if (error) {
      dispatch(addToAbandonListError(error));
      reject(error);
    } else {
      const {payload} = data;
      dispatch(addToAbandonListSuccess(payload));
      resolve();
    }
  });
}
