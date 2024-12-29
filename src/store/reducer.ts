import { createReducer } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  DEFAULT_CURRENT_CITY,
  DEFAULT_SORTING_KEY,
} from '../const';
import {
  changeCity,
  changeSortKey,
  getOffers,
  setAuthorizationStatus,
} from './actions';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';
import { AuthorizationStatusKeys } from '../types/user';

const initialState = {
  currentCity: DEFAULT_CURRENT_CITY as CityKeys,
  currentSortKey: DEFAULT_SORTING_KEY as SortTypeKeys,
  offers: [] as ShortOfferListType,
  authorizationStatus: AuthorizationStatus.Unknown as AuthorizationStatusKeys,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortKey, (state, action) => {
      state.currentSortKey = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
