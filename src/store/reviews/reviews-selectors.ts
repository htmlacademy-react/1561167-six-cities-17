import { NameSpace } from '../../const';
import { ReviewsListType } from '../../types/review';
import { State } from '../../types/state';

const selectReviewsList = (state: State): ReviewsListType => state[NameSpace.Reviews].reviewsList;

const selectIsReviewsListLoading = (state: State): boolean =>
  state[NameSpace.Reviews].isReviewsListLoading;

const selectIsSubmitReviewLoading = (state: State): boolean =>
  state[NameSpace.Reviews].isSubmitReviewLoading;

export {
  selectReviewsList,
  selectIsReviewsListLoading,
  selectIsSubmitReviewLoading,
};
