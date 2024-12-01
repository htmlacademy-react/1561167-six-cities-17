import { AuthorizationStatus, LOCATIONS, Path, TypesPage } from '../const';

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

type PathEnum = (typeof Path)[keyof typeof Path];

export type {
  ImageSizeType,
  CitiesType,
  CityType,
  TypesPageEnum,
  AuthorizationStatusEnum,
  PathEnum,
};
