import { NameSpace } from '../../const';
import { FavoritesListType } from '../../types/favorites';
import { State } from '../../types/state';

const selectFavorites = (state: State): FavoritesListType =>
  state[NameSpace.Favorites].favorites;

const selectFavoritesCount = (state: State): number =>
  state[NameSpace.Favorites].favorites.length;

const selectChangingStaus = (state: State): boolean =>
  state[NameSpace.Favorites].isChangingStaus;

const selectFavoritesLoading = (state: State): boolean =>
  state[NameSpace.Favorites].isFavoritesLoading;

export {
  selectFavorites,
  selectFavoritesCount,
  selectChangingStaus,
  selectFavoritesLoading,
};
