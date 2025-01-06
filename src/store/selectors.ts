import { createSelector } from '@reduxjs/toolkit';
import { filterOffersByCity, sortOffers } from '../utils/utils';
import { State } from '../types/state';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';
import { AuthorizationStatusKeys } from '../types/user';

const selectOffers = (state: State): ShortOfferListType => state.offers;

const selectCurrentCity = (state: State): CityKeys => state.currentCity;

const selectCurrentSortKey = (state: State): SortTypeKeys =>
  state.currentSortKey;

const selectFilteredOffers = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCity) => filterOffersByCity(offers, currentCity)
);

const selectSortedOffers = createSelector(
  [selectFilteredOffers, selectCurrentSortKey],
  (offers, currentSortKey) => sortOffers(offers, currentSortKey)
);

const selectAuthorizationStatus = (state: State): AuthorizationStatusKeys =>
  state.authorizationStatus;

const selectIsLoading = (state: State): boolean => state.isLoading;

export {
  selectOffers,
  selectCurrentCity,
  selectCurrentSortKey,
  selectFilteredOffers,
  selectSortedOffers,
  selectAuthorizationStatus,
  selectIsLoading,
};
