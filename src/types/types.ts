import { AuthStatus, LOCATIONS, Path, TypesPage } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type LocationProps = {
  typesPage: TypesPageEnum;
  location: CityType;
  isActive?: boolean;
};

type CitiesType = typeof LOCATIONS;

type CityType = CitiesType[number];

type TypesPageEnum = (typeof TypesPage)[keyof typeof TypesPage];

type AuthStatusEnum = (typeof AuthStatus)[keyof typeof AuthStatus];

type PathEnum = (typeof Path)[keyof typeof Path];

export type {
  ImageSizeType,
  CitiesType,
  CityType,
  TypesPageEnum,
  AuthStatusEnum,
  PathEnum,
  LocationProps,
};
