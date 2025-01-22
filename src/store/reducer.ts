import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import {
  clearReviewsList,
  setError,
} from './actions';

import {
  submitReview,
  uploadReviewsList,
} from './api-actions';
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
  builder
    .addCase(uploadReviewsList.pending, (state) => {
      state.isReviewsListLoading = true;
    })
    .addCase(uploadReviewsList.fulfilled, (state, action) => {
      state.reviewsList = action.payload;
      state.isReviewsListLoading = false;
    })
    .addCase(uploadReviewsList.rejected, (state) => {
      state.reviewsList = [];
      state.isReviewsListLoading = false;
    })
    .addCase(clearReviewsList, (state) => {
      state.reviewsList = [];
      state.isReviewsListLoading = false;
    })
    .addCase(submitReview.pending, (state) => {
      state.isSubmitReviewLoading = true;
    })
    .addCase(submitReview.fulfilled, (state, action) => {
      state.reviewsList = [...state.reviewsList, action.payload];
      state.isSubmitReviewLoading = false;
    })
    .addCase(submitReview.rejected, (state) => {
      state.isSubmitReviewLoading = false;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
