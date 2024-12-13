import { REVIEWS_COUNT_LIMITED } from '../../../../const';
import { ClientReviewListType, ReviewListType } from '../../../../types/types';

const convertDate = (date: Date): string => {
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return dateString.split('/').reverse().join('-');
};

const convertShortDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

const adaptToClietn = (reviews: ReviewListType): ClientReviewListType =>
  reviews
    .map((review) => ({ ...review, date: new Date(review.date) }))
    .sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0,REVIEWS_COUNT_LIMITED);

export { convertDate, convertShortDate, adaptToClietn };
