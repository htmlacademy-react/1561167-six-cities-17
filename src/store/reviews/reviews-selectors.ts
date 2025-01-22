import { ReviewsListType } from '../../types/review';
import { State } from '../../types/state';

const selectReviewsList = (state: State): ReviewsListType => state.reviewsList;

const selectIsReviewsListLoading = (state: State): boolean =>
  state.isReviewsListLoading;

const selectIsSubmitReviewLoading = (state: State): boolean =>
  state.isSubmitReviewLoading;

export {
  selectReviewsList,
  selectIsReviewsListLoading,
  selectIsSubmitReviewLoading,
};
