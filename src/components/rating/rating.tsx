import cn from 'classnames';
import { ReactNode } from 'react';
import { STARS_MAXIMUM } from '../../const';

type RatingProps = {
  rating: number;
  isCard?: boolean;
  isReview?: boolean;
  isOffer?: boolean;
  children?: ReactNode;
};

function Rating(props: RatingProps): JSX.Element {
  const { rating, isCard, isReview, isOffer, children } = props;
  const ratingClasses = cn('rating', {
    ['reviews__rating']: isReview,
    ['place-card__rating']: isCard,
    ['offer__rating']: isOffer,
  });
  const starsClasses = cn('rating__stars', {
    ['reviews__stars']: isReview,
    ['place-card__stars']: isCard,
    ['offer__stars']: isOffer,
  });

  return (
    <div className={ratingClasses}>
      <div className={starsClasses}>
        <span style={{ width: `${(Math.round(rating) / STARS_MAXIMUM) * 100}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default Rating;
