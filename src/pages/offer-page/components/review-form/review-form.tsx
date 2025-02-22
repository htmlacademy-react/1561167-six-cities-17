import { ChangeEvent, useState } from 'react';
import { ReviewRating } from '../review-rating/review-rating';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { submitReview } from '../../../../store/api-actions';
import { isValidValues } from './utils';
import { CommentLengthLimits } from '../../../../const';
import { FeedbackType } from '../../../../types/review';
import { processErrorHandle } from '../../../../services/process-error-handle';
import { notify } from '../../../../utils/utils';
import { selectExtendedOffer } from '../../../../store/extended-offer/extended-offer-selectors';
import { selectIsSubmitReviewLoading } from '../../../../store/reviews/reviews-selectors';

type ChangedFeedbackType = Omit<FeedbackType, 'rating'> & {
  rating: number | null;
};

const initialReview: ChangedFeedbackType = {
  rating: null,
  comment: '',
};

function ReviewForm(): JSX.Element {
  const offerId = useAppSelector(selectExtendedOffer)?.id ?? '';
  const isSubmitReviewLoading = useAppSelector(selectIsSubmitReviewLoading);

  const dispatch = useAppDispatch();

  const [review, setFeedback] = useState<ChangedFeedbackType>(initialReview);
  const [isValid, setValid] = useState<boolean>(false);

  const handleValueChange = ({
    target,
  }:
    | ChangeEvent<HTMLTextAreaElement>
    | ChangeEvent<HTMLInputElement>): void => {
    setFeedback((prev) => {
      const updated = {
        ...prev,
        [target.name]:
          target.name === 'comment' ? target.value : Number(target.value),
      };

      setValid(isValidValues(updated.comment, updated.rating));

      return updated;
    });
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (!isValid) {
      notify('Invalid rating or comment');
      return;
    }

    dispatch(
      submitReview({
        offerId,
        review: { comment: review.comment, rating: review.rating ?? 0 },
      })
    )
      .unwrap()
      .then(() => {
        setFeedback(initialReview);
        setValid(false);
      })
      .catch(({ message }) =>
        processErrorHandle(`${message}. Try again later.`)
      );
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
      <ReviewRating
        onRatingChange={handleValueChange}
        currentRating={review.rating}
      />
      <textarea
        onChange={handleValueChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        disabled={isSubmitReviewLoading}
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
          disabled={!isValid || isSubmitReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
