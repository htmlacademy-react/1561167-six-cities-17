import { NameSpace } from '../../const';
import { SortTypeKeys } from '../../types/sort';
import { State } from '../../types/state';

const selectCurrentSortKey = (state: State): SortTypeKeys =>
  state[NameSpace.SortKey].currentSortKey;

export { selectCurrentSortKey };
