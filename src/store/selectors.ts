import { State } from '../types/state';

const selectErrorMessage = (state: State): string | null => state.error;

export {selectErrorMessage};
