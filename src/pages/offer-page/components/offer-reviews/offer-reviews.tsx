import { ReviewListType } from '../../../../types/types';
import FeedbackForm from '../feedback-form/feedback-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewsProps = {
  isLoggedIn: boolean;
  reviews: ReviewListType;
};

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const { reviews, isLoggedIn } = props;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·{' '}
        <span className="reviews__amount">
          {reviews.length === 0
            ? 'Your comment will be the first'
            : reviews.length}
        </span>
      </h2>
      <ReviewsList reviews={reviews} />
      {isLoggedIn && <FeedbackForm />}
    </section>
  );
}

export { OfferReviews };
