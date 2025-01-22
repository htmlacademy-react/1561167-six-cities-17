import { createAction } from '@reduxjs/toolkit';

const setError = createAction<string | null>('error/setError');

const clearExtendedOffer = createAction('offer/clearExtendedOffer');

const clearReviewsList = createAction('reviews/clearReviewsList');

export { setError, clearExtendedOffer, clearReviewsList };
