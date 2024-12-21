import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CURRENT_CITY } from '../const';
import { createShortOffers } from './action';
import { CityKeys, ShortOfferListType } from '../types/types';

const initialState = {
  currentCity: DEFAULT_CURRENT_CITY as CityKeys,
  offers: [] as ShortOfferListType,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(createShortOffers, (state,action) => {
    state.offers = action.payload;
  });
});

export { reducer };
