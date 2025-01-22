import { CityKeys } from '../../types/cities';
import { State } from '../../types/state';

const selectCurrentCity = (state: State): CityKeys => state.currentCity;

export { selectCurrentCity };
