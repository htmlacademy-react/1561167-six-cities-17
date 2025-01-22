import { SortTypeKeys } from '../../types/sort';
import { State } from '../../types/state';

const selectCurrentSortKey = (state: State): SortTypeKeys =>
  state.currentSortKey;

export { selectCurrentSortKey };
