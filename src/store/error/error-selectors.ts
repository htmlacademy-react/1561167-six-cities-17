import { ErrorState } from '../../types/error';
import { State } from '../../types/state';

const selectErrorMessage = (state: State): ErrorState => state.error;

export { selectErrorMessage };
