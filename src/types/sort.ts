import { TypesSort } from '../const';
import { InitialState } from './state';

type SortTypeKeys = keyof typeof TypesSort;

type SortState = Pick<InitialState, 'currentSortKey'>;

export type { SortTypeKeys, SortState };
