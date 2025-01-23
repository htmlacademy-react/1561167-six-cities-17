import { ShortOfferType } from './offers';

type FavoritesListType = ShortOfferType[];

type GroupedOffersType = Record<string, FavoritesListType>;

export type { GroupedOffersType, FavoritesListType };
