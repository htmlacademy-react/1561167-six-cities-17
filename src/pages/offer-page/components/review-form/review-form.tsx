import { ChangeEvent, useState } from 'react';
import { ReviewRating } from '../review-rating/review-rating';
import { isValidValues } from './utils';
import {
  CommentType,
  RatingType,
} from '../../../../types/types';
import { CommentLengthLimits } from '../../../../const';

type ReviewType = {
  rating: RatingType;
  review: CommentType;
};

const initialReview: ReviewType = {
  rating: null,
  review: '',
};

function ReviewForm(): JSX.Element {
  const [review, setFeedback] = useState<ReviewType>(initialReview);

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

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    setFeedback(initialReview);
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
      <ReviewRating onRatingChange={handleValueChange} />
      <textarea
        onChange={handleValueChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.review}
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
          disabled={!isValidValues(review.review, review.rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {ReviewForm};
