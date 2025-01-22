import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SORTING_KEY, NameSpace } from '../../const';
import { SortState, SortTypeKeys } from '../../types/sort';

const initialState: SortState = {
  currentSortKey: DEFAULT_SORTING_KEY,
};

export const sortKeySlice = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSortKey(state, action: PayloadAction<SortTypeKeys>) {
      state.currentSortKey = action.payload;
    },
  },
});

export const { changeSortKey } = sortKeySlice.actions;
