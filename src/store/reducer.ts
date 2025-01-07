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
  uploadOffers,
} from './api-actions';

type InitialState = {
  currentCity: CityKeys;
  currentSortKey: SortTypeKeys;
  offers: ShortOfferListType;
  authorizationStatus: AuthorizationStatusKeys;
  isOffersLoading: boolean;
  userInfo: UserInfo | null;
  extendedOffer: OfferType | null;
  isExtendedOfferLoading:boolean;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CURRENT_CITY,
  currentSortKey: DEFAULT_SORTING_KEY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  userInfo: null,
  extendedOffer: null,
  isExtendedOfferLoading: false,
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
      state.isExtendedOfferLoading = false;
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
