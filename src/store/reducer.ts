import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CURRENT_CITY, DEFAULT_SORTING_KEY } from '../const';
import { changeCity, changeSortKey, getOffers } from './actions';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';

const initialState = {
  currentCity: DEFAULT_CURRENT_CITY as CityKeys,
  currentSortKey: DEFAULT_SORTING_KEY as SortTypeKeys,
  offers: [] as ShortOfferListType,
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
    });
});

export { reducer };

export type StateType = typeof initialState;
