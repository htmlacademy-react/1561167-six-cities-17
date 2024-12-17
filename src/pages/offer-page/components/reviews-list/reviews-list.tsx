import { ReviewListType } from '../../../../types/types';
import ReviewsItem from '../../../offer-page/components/reviews-item/reviews-item';
import { adaptToClient } from './utils';

type ReviewsListProps = {
  reviews: ReviewListType;
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {adaptToClient(reviews).map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
