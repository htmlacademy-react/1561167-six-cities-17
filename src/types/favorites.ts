import { ShortOfferListType } from './offers';
import { InitialState } from './state';

type FavoritesListType = string[];

type GroupedOffersType = Record<string, ShortOfferListType>;

type FavoritesState = Pick<
  InitialState,
  'favorites' | 'isFavoritesLoading' | 'isChangingStaus'
>;

export type { GroupedOffersType, FavoritesListType, FavoritesState };
