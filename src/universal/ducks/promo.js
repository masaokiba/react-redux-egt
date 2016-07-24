import {Map} from 'immutable';

export const TICK = 'TICK';
export const BEFORE_OFFER = 'BEFORE_OFFER';
export const DURING_INITIAL_OFFER = 'DURING_INITIAL_OFFER';
export const DURING_REOPEN_OFFER = 'DURING_REOPEN_OFFER';
export const BETWEEN_OFFERS = 'BETWEEN_OFFERS';
export const AFTER_OFFERS = 'AFTER_OFFERS';

export const initialState = Map({
  beforeOffer: false,
  duringInitialOffer: false,
  duringReopenOffer: false,
  betweenOffers: false,
  afterOffers: false,
  offerTimeRemaining: 0
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TICK:
      return state.merge({
        offerTimeRemaining: action.payload.offerTimeRemaining
      });
    case BEFORE_OFFER:
      return state.merge({
        beforeOffer: action.isBefore
      });
    case DURING_INITIAL_OFFER:
      return state.merge({
        duringInitialOffer: action.open
      });
    case BETWEEN_OFFERS:
      return state.merge({
        betweenOffers: action.open
      });
    case DURING_REOPEN_OFFER:
      return state.merge({
        duringReopenOffer: action.open
      });
    case AFTER_OFFERS:
      return state.merge({
        afterOffers: action.open
      });
    default:
      return state;
  }
}

export function tick(offerTimeRemaining) {
  return {
    type: TICK,
    payload: {
      offerTimeRemaining
    }
  };
}

export function beforeOffer(isBefore) {
  return {
    type: BEFORE_OFFER,
    isBefore: isBefore
  };
}

export function duringInitialOffer(open) {
  return {
    type: DURING_INITIAL_OFFER,
    open: open
  };
}

export function duringReopenOffer(open) {
  return {
    type: DURING_REOPEN_OFFER,
    open: open
  };
}

export function betweenOffers(open) {
  return {
    type: BETWEEN_OFFERS,
    open: open
  };
}

export function afterOffers(open) {
  return {
    type: AFTER_OFFERS,
    open: open
  };
}
