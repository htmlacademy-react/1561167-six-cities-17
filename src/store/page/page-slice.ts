import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Page } from '../../const';
import { PageKeys, PageState } from '../../types/page';

const initialState: PageState = {
  currentPage: Page.Main,
};

const pageSlice = createSlice({
  name: NameSpace.Page,
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<PageKeys>) {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;
export { pageSlice };
