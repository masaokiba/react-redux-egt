import moment from 'moment';
import {tick, beforeOffer, duringInitialOffer, duringReopenOffer, betweenOffers, afterOffers} from '../ducks/promo';

const calculateOfferState = ({
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate,
        dispatch
      }) => {

  const now = new Date(),
    nowMoment = moment(now),
    initialOfferStartDateMoment = moment(initialOfferStartDate),
    initialOfferEndDateMoment = moment(initialOfferEndDate),
    reopenOfferStartDateMoment = moment(reopenOfferStartDate),
    reopenOfferEndDateMoment = moment(reopenOfferEndDate);

  let offerTimeRemaining = 0;

  if (nowMoment.isBefore(initialOfferStartDateMoment)) {
    dispatch(beforeOffer(true));
    offerTimeRemaining = Math.floor((initialOfferStartDate - now) / 1000);
    return dispatch(tick(offerTimeRemaining));
  } else {
    dispatch(beforeOffer(false));
  }

  if (nowMoment.isBetween(initialOfferStartDateMoment, initialOfferEndDateMoment)) {
    dispatch(duringInitialOffer(true));
    offerTimeRemaining = Math.floor((initialOfferEndDate - now) / 1000);
    return dispatch(tick(offerTimeRemaining));
  } else {
    dispatch(duringInitialOffer(false));
  }

  if (nowMoment.isBetween(initialOfferEndDate, reopenOfferStartDateMoment)) {
    return dispatch(betweenOffers(true));
  } else {
    dispatch(betweenOffers(false));
  }

  if (nowMoment.isBetween(reopenOfferStartDateMoment, reopenOfferEndDateMoment)) {
    dispatch(duringReopenOffer(true));
    offerTimeRemaining = Math.floor((reopenOfferEndDate - now) / 1000);
    return dispatch(tick(offerTimeRemaining));
  } else {
    dispatch(duringReopenOffer(false));
  }

  if (nowMoment.isAfter(reopenOfferEndDateMoment)) {
    return dispatch(afterOffers(true));
  } else {
    dispatch(afterOffers(false));
  }

};

export const _getOfferState = ({
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate,
        dispatch
      }) => {
  let state = {
    duringInitialOffer: false,
    duringReopenOffer: false,
    betweenOffers: false,
    afterOffers: false,
    offerTimeRemaining: 0
  };

  const now = new Date(),
    nowMoment = moment(now),
    initialOfferStartDateMoment = moment(initialOfferStartDate),
    initialOfferEndDateMoment = moment(initialOfferEndDate),
    reopenOfferStartDateMoment = moment(reopenOfferStartDate),
    reopenOfferEndDateMoment = moment(reopenOfferEndDate);

  let offerTimeRemaining = 0;

  if (nowMoment.isBefore(initialOfferStartDateMoment)) {
    state.beforeOffer = true;
    state.offerTimeRemaining = Math.floor((initialOfferStartDate - now) / 1000);
  } else {
    state.beforeOffer = false;
  }

  if (nowMoment.isBetween(initialOfferStartDateMoment, initialOfferEndDateMoment)) {
    state.duringInitialOffer = true;
    state.offerTimeRemaining = Math.floor((initialOfferEndDate - now) / 1000);
  } else {
    state.duringInitialOffer = false;
  }

  if (nowMoment.isBetween(initialOfferEndDate, reopenOfferStartDateMoment)) {
    state.betweenOffers = true;
  } else {
    state.betweenOffers = false;
  }

  if (nowMoment.isBetween(reopenOfferStartDateMoment, reopenOfferEndDateMoment)) {
    state.duringReopenOffer = true;
    state.offerTimeRemaining = Math.floor((reopenOfferEndDate - now) / 1000);
  } else {
    state.duringReopenOffer = false;
  }

  if (nowMoment.isAfter(reopenOfferEndDateMoment)) {
    state.afterOffers = true;
  } else {
    state.afterOffers = false;
  }

  return state;
};

export default calculateOfferState;
