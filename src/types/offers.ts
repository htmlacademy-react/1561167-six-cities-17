import { OfferType } from './offer';
import { InitialState } from './state';

type ShortOfferType = Omit<
  OfferType,
  'description' | 'images' | 'goods' | 'host' | 'bedrooms' | 'maxAdults'
> & { previewImage: string };

type ShortOfferListType = ShortOfferType[];

type OffersState = Pick<
  InitialState,
  'offers' | 'isOffersLoading' | 'nearbyOffers' | 'isNearbyOffersLoading'
>;

export type { ShortOfferType, ShortOfferListType, OffersState };
