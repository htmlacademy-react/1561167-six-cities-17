import { createSelector } from '@reduxjs/toolkit';
import { filterOffersByCity, sortOffers } from '../utils/utils';
import { State } from '../types/state';

const selectOffers = (state: State) => state.offers;

const selectCurrentCity = (state: State) => state.currentCity;

const selectCurrentSortKey = (state: State) => state.currentSortKey;

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
