import Rating from '../../../../components/rating/rating';
import { ClientReviewType } from '../../../../types/review';
import { convertDate, convertShortDate } from './utils';

type ReviewsItemProps = {
  review: ClientReviewType;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const {
    comment,
    date,
    rating,
    user: { name, avatarUrl },
  } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} isReview />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={convertDate(date)}>
          {convertShortDate(date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
