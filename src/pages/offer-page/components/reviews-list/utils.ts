import { REVIEWS_COUNT_LIMITED } from '../../../../const';
import { ClientReviewsListType, ReviewsListType } from '../../../../types/review';

const adaptToClient = (reviews: ReviewsListType): ClientReviewsListType =>
  reviews
    .map((review) => ({ ...review, date: new Date(review.date) }))
    .sort((previous, next) => next.date.getTime() - previous.date.getTime())
    .slice(0, REVIEWS_COUNT_LIMITED);

export { adaptToClient };
