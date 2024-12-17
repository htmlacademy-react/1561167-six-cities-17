import { REVIEWS_COUNT_LIMITED } from '../../../../const';
import { ClientReviewListType, ReviewListType } from '../../../../types/types';

const adaptToClient = (reviews: ReviewListType): ClientReviewListType =>
  reviews
    .map((review) => ({ ...review, date: new Date(review.date) }))
    .sort((previous, next) => next.date.getTime() - previous.date.getTime())
    .slice(0, REVIEWS_COUNT_LIMITED);

export { adaptToClient };
