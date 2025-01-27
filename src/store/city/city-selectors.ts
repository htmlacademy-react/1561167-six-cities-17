import { NameSpace } from '../../const';
import { CityKeys } from '../../types/cities';
import { State } from '../../types/state';

const selectCurrentCity = (state: State): CityKeys =>
  state[NameSpace.City].currentCity;

export { selectCurrentCity };
