import { ChangeEvent, useState } from 'react';
import { CommentLengthLimits, RATING_VALUES } from '../../const';
import { CommentType, RatingType } from '../../types/types';
import { isDisable } from './utils';

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
  comment: CommentType;
};

const initialFeedback: FeedbackType = {
  rating: undefined,
  comment: undefined,
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
        <Star key={value} onRatingChange={onRatingChange} number={i} />
      ))}
    </div>
  );
}

function FeedbackForm(): JSX.Element {
  const [feedback, setFeedback] = useState<FeedbackType>(initialFeedback);

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setFeedback((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFeedback((prev) => ({
      ...prev,
      rating: Number(e.target.value) as RatingType,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating onRatingChange={handleRatingChange} />
      <textarea
        onChange={handleReviewChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={feedback.comment}
        defaultValue={''}
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
          disabled={isDisable(feedback.comment, feedback.rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
