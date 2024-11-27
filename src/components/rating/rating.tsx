import cn from 'classnames';
import { ReactNode } from 'react';

type RatingProps = {
  isCard?: boolean;
  isReview?: boolean;
  isOffer?: boolean;
  children?: ReactNode;
};

function Rating(props: RatingProps): JSX.Element {
  const { isCard, isReview, isOffer, children } = props;
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
        <span style={{ width: '80%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default Rating;
