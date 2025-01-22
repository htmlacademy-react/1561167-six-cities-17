import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_SORTING_KEY, NameSpace } from '../../const';
import { SortState, SortTypeKeys } from '../../types/sort';

const initialState: SortState = {
  currentSortKey: DEFAULT_SORTING_KEY,
};

const sortKeySlice = createSlice({
  name: NameSpace.SortKey,
  initialState,
  reducers: {
    changeSortKey(state, action: PayloadAction<SortTypeKeys>) {
      state.currentSortKey = action.payload;
    },
  },
});

export { sortKeySlice };

export const { changeSortKey } = sortKeySlice.actions;
