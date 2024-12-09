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

type UserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

type OfferCityType = {
  name: CityType;
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
  host: UserType;
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

type FavoritesType = OfferType & { previewImage: string };

type FavoritesListType = FavoritesType[];

type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};
type ReviewListType = readonly ReviewType[];

type OnCardChangeType = (id: string | null) => void;

type GroupedOffersType = Record<string, ShortOfferListType>;

type RatingType = 1 | 2 | 3 | 4 | 5 | null;

type CommentType = string;

type CurrentCityChangeType=(city: CityType) => void;

export type {
  ImageSizeType,
  CitiesType,
  CityType,
  TypesPageEnum,
  AuthStatusEnum,
  PathEnum,
  CityProps,
  OfferType,
  ShortOfferType,
  ReviewType,
  ReviewListType,
  OfferListType,
  ShortOfferListType,
  OnCardChangeType,
  GroupedOffersType,
  RatingType,
  CommentType,
  FavoritesType,
  FavoritesListType,CurrentCityChangeType
};
