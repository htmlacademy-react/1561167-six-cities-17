import { nanoid } from 'nanoid';
import { starsCount } from './settings';

type StarProps = {
  number: number;
};

function Star({ number }: StarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={number}
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

function Rating(): JSX.Element {
  const stars = Array.from({ length: starsCount }, (_, i) => i + 1);
  return (
    <div className="reviews__rating-form form__rating">
      {stars.map((number) => (
        <Star key={nanoid()} number={number} />
      ))}
    </div>
  );
}

function FeedbackForm() {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
