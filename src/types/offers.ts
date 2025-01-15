import { CityKeys } from './cities';

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
  description: string;
  type: string;
  price: number;
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

type OfferListType = OfferType[];

type ShortOfferType = Omit<
  OfferType,
  'description' | 'images' | 'goods' | 'host' | 'bedrooms' | 'maxAdults'
> & { previewImage: string };

type ShortOfferListType = ShortOfferType[];

export type {
  OfferType,
  ShortOfferType,
  OfferListType,
  ShortOfferListType,
  OfferCityType,
  HostType,
  LocationType,
};
