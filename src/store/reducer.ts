import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CURRENT_CITY, DEFAULT_SORTING_KEY } from '../const';
import { cityChange, createShortOffers, currentSortKeyChange } from './action';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';

const initialState = {
  currentCity: DEFAULT_CURRENT_CITY as CityKeys,
  currentSortKey: DEFAULT_SORTING_KEY as SortTypeKeys,
  offers: [] as ShortOfferListType,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createShortOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(cityChange, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(currentSortKeyChange, (state, action) => {
      state.currentSortKey = action.payload;
    });
});

export { reducer };
