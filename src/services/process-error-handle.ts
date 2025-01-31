import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { ERROR_SHOW_TIMEOUT } from '../const';
import { notify } from '../utils/utils';
import { setError } from '../store/error/error-slice';

const clearError = createAsyncThunk('error/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), ERROR_SHOW_TIMEOUT);
});

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
  notify(message);
};

export { processErrorHandle };
