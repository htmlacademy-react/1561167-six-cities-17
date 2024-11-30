import { LOCATIONS, TypesPage } from '../const';

type SizeType = {
  Width: number;
  Height: number;
};

type ImageSizeType = {
  [key: string]: SizeType;
};

type CitiesType = typeof LOCATIONS;

type CityType = (typeof LOCATIONS)[number];

type TypesPageEnum = (typeof TypesPage)[keyof typeof TypesPage];

export type { ImageSizeType, CitiesType, CityType, TypesPageEnum };
