import { RATING_VALUES } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { selectIsSubmitReviewLoading } from '../../../../store/reviews/reviews-selectors';
import { OnChangeEventType } from '../../../../types/review';

type ReviewStarProps = {
  number: number;
  currentRating: number | null;
  onRatingChange: OnChangeEventType;
};

function ReviewStar(props: ReviewStarProps): JSX.Element {
  const { number, onRatingChange, currentRating } = props;
  const isSubmitReviewLoading = useAppSelector(selectIsSubmitReviewLoading);

  return (
    <>
      <input
        onChange={onRatingChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
        checked={currentRating === number}
        disabled={isSubmitReviewLoading}
      />
      <label
        htmlFor={`${number}-stars`}
        className="reviews__rating-label form__rating-label"
        title={RATING_VALUES[number - 1]}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export { ReviewStar };
