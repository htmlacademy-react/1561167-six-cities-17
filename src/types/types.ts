import { AuthStatus, CITIES, Path, TypesPage } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type CityProps = {
  typesPage: TypesPageEnum;
  city: CityType;
  isActive?: boolean;
};

type CitiesType = typeof CITIES;

type CityType = CitiesType[number];

type TypesPageEnum = (typeof TypesPage)[keyof typeof TypesPage];

type AuthStatusEnum = (typeof AuthStatus)[keyof typeof AuthStatus];

type PathEnum = (typeof Path)[keyof typeof Path];

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferType = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

type OfferPreviewType = Omit<
  OfferType,
  'description' | 'images' | 'goods' | 'host' | 'bedrooms' | 'maxAdults'
> & { previewImage: string };

type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type {
  ImageSizeType,
  CitiesType,
  CityType,
  TypesPageEnum,
  AuthStatusEnum,
  PathEnum,
  CityProps,
  OfferType,
  OfferPreviewType,
  Review,
};
