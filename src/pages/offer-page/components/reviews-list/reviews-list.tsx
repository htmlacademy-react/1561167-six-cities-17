import { ReviewsListType } from '../../../../types/review';
import ReviewsItem from '../../../offer-page/components/reviews-item/reviews-item';
import { adaptToClient } from './utils';

type ReviewsListProps = {
  reviews: ReviewsListType;
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

export { ReviewsList };
