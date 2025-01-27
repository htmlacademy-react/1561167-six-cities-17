import { createSlice } from '@reduxjs/toolkit';
import { ReviewsState } from '../../types/review';
import { NameSpace } from '../../const';
import { submitReview, uploadReviewsList } from '../api-actions';

const initialState: ReviewsState = {
  reviewsList: [],
  isReviewsListLoading: false,
  isSubmitReviewLoading: false,
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    clearReviewsList(state) {
      state.reviewsList = [];
      state.isReviewsListLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadReviewsList.pending, (state) => {
        state.isReviewsListLoading = true;
      })
      .addCase(uploadReviewsList.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewsListLoading = false;
      })
      .addCase(uploadReviewsList.rejected, (state) => {
        state.reviewsList = [];
        state.isReviewsListLoading = false;
      })
      .addCase(submitReview.pending, (state) => {
        state.isSubmitReviewLoading = true;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.reviewsList = [...state.reviewsList, action.payload];
        state.isSubmitReviewLoading = false;
      })
      .addCase(submitReview.rejected, (state) => {
        state.isSubmitReviewLoading = false;
      });
  },
});

export { reviewsSlice };

export const { clearReviewsList } = reviewsSlice.actions;
