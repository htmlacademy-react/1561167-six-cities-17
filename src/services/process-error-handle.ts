import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { setError } from '../store/actions';
import { ERROR_SHOW_TIMEOUT } from '../const';
import { notify } from '../utils/utils';

const clearError = createAsyncThunk('error/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), ERROR_SHOW_TIMEOUT);
});

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
  notify(message);
};

export { processErrorHandle };
