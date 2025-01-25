import { Status } from '../const';
import { ShortOfferListType } from './offers';
import { InitialState } from './state';

type FavoritesListType = string[];

type GroupedOffersType = Record<string, ShortOfferListType>;

type FavoritesState = Pick<
  InitialState,
  'favorites' | 'isFavoritesLoading' | 'isChangingStaus'
>;

type FavoriteStatusKeys = (typeof Status)[keyof typeof Status];

type FavoriteStatus = {
  offerId: string;
  status: FavoriteStatusKeys;
};
export type {
  GroupedOffersType,
  FavoritesListType,
  FavoritesState,
  FavoriteStatus,
  FavoriteStatusKeys,
};
