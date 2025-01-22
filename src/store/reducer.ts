import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import { changeCity, changeSortKey, clearExtendedOffer, clearNearbyOffers, clearReviewsList, setError } from './actions';

import {
  submitReview,
  uploadExtendedOffer,
  uploadNearbyOffers,
  uploadOffers,
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
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortKey, (state, action) => {
      state.currentSortKey = action.payload;
    })
    .addCase(uploadOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(uploadOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(uploadOffers.rejected, (state) => {
      state.offers = [];
      state.isOffersLoading = false;
    })
    .addCase(uploadExtendedOffer.pending, (state) => {
      state.isExtendedOfferLoading = true;
    })
    .addCase(uploadExtendedOffer.fulfilled, (state, action) => {
      state.extendedOffer = action.payload;
      state.isExtendedOfferLoading = false;
    })
    .addCase(uploadExtendedOffer.rejected, (state) => {
      state.extendedOffer = null;
      state.isExtendedOfferLoading = false;
    })
    .addCase(clearExtendedOffer, (state) => {
      state.extendedOffer = null;
      state.isExtendedOfferLoading = false;
    })
    .addCase(uploadNearbyOffers.pending, (state) => {
      state.isNearbyOffersLoading = true;
    })
    .addCase(uploadNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoading = false;
    })
    .addCase(uploadNearbyOffers.rejected, (state) => {
      state.nearbyOffers = [];
      state.isNearbyOffersLoading = false;
    })
    .addCase(clearNearbyOffers, (state) => {
      state.nearbyOffers = [];
      state.isNearbyOffersLoading = false;
    })
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
