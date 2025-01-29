import { CityKeys } from './cities';
import { InitialState } from './state';

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type HostType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

type OfferCityType = {
  name: CityKeys;
  location: LocationType;
};

type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  description: string;
  images: string[];
  city: OfferCityType;
  location: LocationType;
  goods: string[];
  host: HostType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

type OfferState = Pick<
  InitialState,
  'extendedOffer' | 'isExtendedOfferLoading'
>;

export type {
  LocationType,
  HostType,
  OfferCityType,
  OfferType,
  OfferState,
};
