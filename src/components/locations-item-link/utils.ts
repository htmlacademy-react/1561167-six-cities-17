import { CITIES } from '../../const';
import { CityKeys } from '../../types/cities';

const getRandomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomCity = (): CityKeys =>
  CITIES[getRandomInteger(0, CITIES.length - 1)];

export { getRandomCity };
