import { CITIES } from '../const';
import { InitialState } from './state';

type CitiesType = typeof CITIES;

type CityKeys = CitiesType[number];

type CurrentCityChangeType = (city: CityKeys) => void;

type CityState = Pick<InitialState, 'currentCity'>;

export type { CityKeys, CurrentCityChangeType, CityState };
