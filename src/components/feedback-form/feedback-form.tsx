import { ChangeEvent, useState } from 'react';
import { CommentLengthLimits, RATING_VALUES } from '../../const';
import { CommentType, RatingType } from '../../types/types';
import { isValidValues } from './utils';

type onRatingChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

type RatingProps = {
  onRatingChange: onRatingChangeType;
};

type StarProps = {
  number: number;
  onRatingChange: onRatingChangeType;
};

type FeedbackType = {
  rating: RatingType;
  review: CommentType;
};

const initialFeedback: FeedbackType = {
  rating: null,
  review: '',
};

function Star({ number, onRatingChange }: StarProps): JSX.Element {
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

function Rating({ onRatingChange }: RatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALUES.map((value, i) => (
        <Star key={value} onRatingChange={onRatingChange} number={5 - i} />
      ))}
    </div>
  );
}

function FeedbackForm(): JSX.Element {
  const [feedback, setFeedback] = useState<FeedbackType>(initialFeedback);

  const handleValueChange = ({
    target,
  }:
    | ChangeEvent<HTMLTextAreaElement>
    | ChangeEvent<HTMLInputElement>): void => {
    setFeedback((prev) => ({
      ...prev,
      [target.name]:
        target.name === 'review' ? target.value : Number(target.value),
    }));
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFeedback(initialFeedback);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating onRatingChange={handleValueChange} />
      <textarea
        onChange={handleValueChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={feedback.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {CommentLengthLimits.Min} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidValues(feedback.review, feedback.rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
