import { OnChangeEventType } from '../../../../types/review';

type ReviewStarProps = {
  number: number;
  onRatingChange: OnChangeEventType;
};

function ReviewStar({ number, onRatingChange }: ReviewStarProps): JSX.Element {
  return (
    <>
      <input
        onChange={onRatingChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${number}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export { ReviewStar };
