import { createAction } from '@reduxjs/toolkit';


const setError = createAction<string | null>('error/setError');

const clearExtendedOffer = createAction('offer/clearExtendedOffer');

const clearNearbyOffers = createAction('offers/clearNearbyOffers');

const clearReviewsList = createAction('reviews/clearReviewsList');

export {
  setError,
  clearExtendedOffer,
  clearNearbyOffers,
  clearReviewsList,
};
