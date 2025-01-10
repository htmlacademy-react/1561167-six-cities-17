import { ReviewStar } from '../review-star/review-star';
import { RATING_VALUES } from '../../../../const';
import { OnChangeEventType } from '../../../../types/review';

type RatingProps = {
  onRatingChange: OnChangeEventType;
};

function ReviewRating({ onRatingChange }: RatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALUES.map((value, i) => (
        <ReviewStar
          key={value}
          onRatingChange={onRatingChange}
          number={RATING_VALUES.length - i}
        />
      ))}
    </div>
  );
}

export { ReviewRating };
