import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorState } from '../../types/error';
import { NameSpace } from '../../const';

const initialState: ErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export {errorSlice};

export const { setError } = errorSlice.actions;
