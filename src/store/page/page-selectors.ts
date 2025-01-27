import { NameSpace, Page } from '../../const';
import { PageKeys } from '../../types/page';
import { State } from '../../types/state';

const selectCurrentPage = (state: State): PageKeys =>
  state[NameSpace.Page].currentPage ?? Page.Main;

export { selectCurrentPage };
