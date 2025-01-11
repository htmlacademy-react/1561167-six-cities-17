import { RATING_VALUES } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { selectIsSubmitReview } from '../../../../store/selectors';
import { OnChangeEventType } from '../../../../types/review';

type ReviewStarProps = {
  number: number;
  onRatingChange: OnChangeEventType;
};

function ReviewStar(props: ReviewStarProps): JSX.Element {
  const { number, onRatingChange } = props;
  const isSubmitReview = useAppSelector(selectIsSubmitReview);

  return (
    <>
      <input
        onChange={onRatingChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
        disabled={isSubmitReview}
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
