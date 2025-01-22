import { CITIES } from '../const';
import { InitialState } from './state';
import { TypesPageKeys } from './types';

type CitiesType = typeof CITIES;

type CityKeys = CitiesType[number];

type CityProps = {
  typesPage: TypesPageKeys;
  city: CityKeys;
  isActive?: boolean;
};

type CurrentCityChangeType = (city: CityKeys) => void;

type CityState = Pick<InitialState, 'currentCity'>;

export type { CityProps, CityKeys, CurrentCityChangeType, CityState };
