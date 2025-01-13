import { ReviewStar } from '../review-star/review-star';
import { RATING_VALUES } from '../../../../const';
import { OnChangeEventType } from '../../../../types/review';

type RatingProps = {
  onRatingChange: OnChangeEventType;
  currentRating: number | null;
};

function ReviewRating(props: RatingProps): JSX.Element {
  const { onRatingChange, currentRating } = props;

  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALUES.map((value, i) => (
        <ReviewStar
          key={value}
          onRatingChange={onRatingChange}
          number={RATING_VALUES.length - i}
          currentRating={currentRating}
        />
      ))}
    </div>
  );
}

export { ReviewRating };
