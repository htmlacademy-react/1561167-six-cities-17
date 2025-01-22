import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import { setError } from './actions';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  currentCity: DEFAULT_CURRENT_CITY,
  currentSortKey: DEFAULT_SORTING_KEY,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  extendedOffer: null,
  isExtendedOfferLoading: false,
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  reviewsList: [],
  isReviewsListLoading: false,
  isSubmitReviewLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
