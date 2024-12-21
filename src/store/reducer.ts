import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CURRENT_CITY } from '../const';
import { cityChange, createShortOffers } from './action';
import { CityKeys, ShortOfferListType } from '../types/types';

const initialState = {
  currentCity: DEFAULT_CURRENT_CITY as CityKeys,
  offers: [] as ShortOfferListType,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createShortOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(cityChange, (state, action) => {
      state.currentCity = action.payload;
    });
});

export { reducer };
