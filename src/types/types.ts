import { AuthorizationStatus, LOCATIONS, TypesPage } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type CitiesType = typeof LOCATIONS;

type CityType = CitiesType[number];

type TypesPageEnum = (typeof TypesPage)[keyof typeof TypesPage];

type AuthorizationStatusEnum =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

export type {
  ImageSizeType,
  CitiesType,
  CityType,
  TypesPageEnum,
  AuthorizationStatusEnum,
};
