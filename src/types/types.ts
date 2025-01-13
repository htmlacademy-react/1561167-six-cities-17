import { CITIES, Path, TypesPage, TypesSort } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type CityProps = {
  typesPage: TypesPageKeys;
  city: CityKeys;
  isActive?: boolean;
};

type CitiesType = typeof CITIES;

type CityKeys = CitiesType[number];

type TypesPageKeys = (typeof TypesPage)[keyof typeof TypesPage];

type PathKeys = (typeof Path)[keyof typeof Path];

type SortTypeKeys = keyof typeof TypesSort;

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
  host: UserType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

type MapPointsListType = Pick<OfferType, 'id' | 'city' | 'location'>[];

type OfferListType = OfferType[];

type ShortOfferType = Omit<
  OfferType,
  'description' | 'images' | 'goods' | 'host' | 'bedrooms' | 'maxAdults'
> & { previewImage: string };

type ShortOfferListType = ShortOfferType[];

type FavoritesType = OfferType & { previewImage: string };

type FavoritesListType = FavoritesType[];

type OnCardHoverType = (id: string | null) => void;

type GroupedOffersType = Record<string, ShortOfferListType>;

type CurrentCityChangeType = (city: CityKeys) => void;

export type {
  ImageSizeType,
  CitiesType,
  CityKeys,
  TypesPageKeys,
  PathKeys,
  CityProps,
  OfferType,
  ShortOfferType,
  OfferListType,
  ShortOfferListType,
  OnCardHoverType,
  GroupedOffersType,
  FavoritesType,
  FavoritesListType,
  CurrentCityChangeType,
  OfferCityType,
  LocationType,
  SortTypeKeys,
  MapPointsListType,
  UserType,
};
