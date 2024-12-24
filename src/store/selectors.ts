import { createSelector } from '@reduxjs/toolkit';
import { StateType } from './reducer';
import { filterOffersByCity, sortOffers } from '../utils/utils';

const selectOffers = (state: StateType) => state.offers;

const selectCurrentCity = (state: StateType) => state.currentCity;

const selectCurrentSortKey = (state: StateType) => state.currentSortKey;

const selectFilteredOffers = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCity) => filterOffersByCity(offers, currentCity)
);

const selectFilteredSortedOffers = createSelector(
  [selectOffers, selectCurrentCity, selectCurrentSortKey],
  (offers, currentCity, currentSortKey) =>
    sortOffers(filterOffersByCity(offers, currentCity), currentSortKey)
);

export {
  selectOffers,
  selectCurrentCity,
  selectCurrentSortKey,
  selectFilteredOffers,
  selectFilteredSortedOffers,
};
