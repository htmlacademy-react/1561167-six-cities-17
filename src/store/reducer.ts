import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import { changeCity, changeSortKey } from './actions';
import { CityKeys, OfferType, ShortOfferListType, SortTypeKeys } from '../types/types';
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
  isLoading: boolean;
  userInfo: UserInfo | null;
  extendedOffer: OfferType | null;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CURRENT_CITY,
  currentSortKey: DEFAULT_SORTING_KEY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  userInfo: null,
  extendedOffer: null,
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
      state.isLoading = true;
    })
    .addCase(uploadOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(uploadOffers.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(uploadExtendedOffer.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(uploadExtendedOffer.fulfilled, (state, action) => {
      state.extendedOffer = action.payload;
      state.isLoading = false;
    })
    .addCase(uploadExtendedOffer.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(checkAuthorizationStatus.fulfilled, (state) => {
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
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = null;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = null;
    })
    .addCase(logOut.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export { reducer };
