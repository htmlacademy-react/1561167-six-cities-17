import { CITIES } from '../const';
import { TypesPageKeys } from './types';

type CitiesType = typeof CITIES;

type CityKeys = CitiesType[number];

type CityProps = {
  typesPage: TypesPageKeys;
  city: CityKeys;
  isActive?: boolean;
};

type CurrentCityChangeType = (city: CityKeys) => void;

export type { CityProps, CityKeys, CurrentCityChangeType };
