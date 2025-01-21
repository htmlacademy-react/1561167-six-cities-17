import { createAction } from '@reduxjs/toolkit';
import { SortTypeKeys } from '../types/types';
import { CityKeys } from '../types/cities';

const changeCity = createAction<CityKeys>('location/changeCity');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

const setError = createAction<string | null>('error/setError');

const clearExtendedOffer = createAction('offer/clearExtendedOffer');

const clearNearbyOffers = createAction('offers/clearNearbyOffers');

const clearReviewsList = createAction('reviews/clearReviewsList');

export {
  changeCity,
  changeSortKey,
  setError,
  clearExtendedOffer,
  clearNearbyOffers,
  clearReviewsList,
};
