import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import { changeCity, changeSortKey } from './actions';
import {
  CityKeys,
  OfferType,
  ShortOfferListType,
  SortTypeKeys,
} from '../types/types';
import { AuthorizationStatusKeys, UserInfo } from '../types/user';

import {
  checkAuthorizationStatus,
  logIn,
  logOut,
  uploadExtendedOffer,
  uploadNearbyOffers,
  uploadOffers,
  uploadReviewsList,
} from './api-actions';
import { ReviewsListType } from '../types/review';

type InitialState = {
  currentCity: CityKeys;
  currentSortKey: SortTypeKeys;
  offers: ShortOfferListType;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatusKeys;
  userInfo: UserInfo | null;
  extendedOffer: OfferType | null;
  isExtendedOfferLoading: boolean;
  nearbyOffers: ShortOfferListType;
  isNearbyOffersLoading: boolean;
  reviewsList: ReviewsListType;
  isReviewsListLoading: boolean;
};

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
    .addCase(checkAuthorizationStatus.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuthorizationStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(logIn.rejected, (state) => {
      state.userInfo = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.userInfo = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logOut.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export { reducer };
