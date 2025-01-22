import { createSelector } from '@reduxjs/toolkit';
import { ShortOfferListType } from '../../types/offers';
import { State } from '../../types/state';
import { selectCurrentCity } from '../city/city-selectors';
import { filterOffersByCity, sortOffers } from '../../utils/utils';
import { selectCurrentSortKey } from '../sort-key/sort-key-selectors';

const selectOffers = (state: State): ShortOfferListType => state.offers;

const selectFilteredOffers = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCity) => filterOffersByCity(offers, currentCity)
);

const selectSortedOffers = createSelector(
  [selectFilteredOffers, selectCurrentSortKey],
  (offers, currentSortKey) => sortOffers(offers, currentSortKey)
);

const selectIsOffersLoading = (state: State): boolean => state.isOffersLoading;

export {
  selectOffers,
  selectIsOffersLoading,
  selectFilteredOffers,
  selectSortedOffers,
};
