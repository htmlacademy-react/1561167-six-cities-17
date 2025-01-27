import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesListType } from '../../types/favorites';
import { State } from '../../types/state';
import { selectOffers } from '../offers/offers-selectors';

const selectOfferIsFavorite = (state: State, offerId: string): boolean =>
  state[NameSpace.Favorites].favorites.includes(offerId);

const selectFavorites = (state: State): FavoritesListType =>
  state[NameSpace.Favorites].favorites;

const selectFavoritesOffers = createSelector(
  [selectOffers, selectFavorites],
  (offers, favorites) => offers.filter(({ id }) => favorites.includes(id))
);

const selectFavoritesCount = (state: State): number =>
  state[NameSpace.Favorites].favorites.length;

const selectChangingStaus = (state: State): boolean =>
  state[NameSpace.Favorites].isChangingStaus;

export {
  selectOfferIsFavorite,
  selectFavoritesOffers,
  selectFavoritesCount,
  selectChangingStaus,
};
