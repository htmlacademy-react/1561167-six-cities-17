import { ShortOfferType } from './offers';
import { InitialState } from './state';

type FavoritesListType = ShortOfferType[];

type GroupedOffersType = Record<string, FavoritesListType>;

type FavoritesState = Pick<InitialState, 'favorites' | 'isFavoritesLoading'>;

export type { GroupedOffersType, FavoritesListType, FavoritesState };
