import { OfferType } from './offer';
import { ShortOfferListType } from './offers';

type FavoritesType = OfferType & { previewImage: string };

type FavoritesListType = FavoritesType[];

type GroupedOffersType = Record<string, ShortOfferListType>;

export type { GroupedOffersType, FavoritesListType };
