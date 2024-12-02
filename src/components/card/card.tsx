import cn from 'classnames';
import { Path, TypesPage } from '../../const';
import Mark from '../mark/mark';
import Rating from '../rating/rating';
import { ImageSize } from './settings';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { TypesPageEnum } from '../../types/types';
import { Link } from 'react-router-dom';

type CardProps = {
  typesPage: TypesPageEnum;
  isPremium?: boolean;
};

type CardImageProps = {
  typesPage: TypesPageEnum;
};

function CardImage({ typesPage }: CardImageProps): JSX.Element {
  const wrapperClasses = cn('place-card__image-wrapper', {
    ['cities__image-wrapper']: typesPage === TypesPage.Main,
    ['near-places__image-wrapper']: typesPage === TypesPage.Offer,
    ['favorites__image-wrapper']: typesPage === TypesPage.Favorites,
  });
  return (
    <div className={wrapperClasses}>
      <Link to={Path.Offer}>
        <img
          className="place-card__image"
          src="img/room.jpg"
          width={
            typesPage === TypesPage.Favorites
              ? ImageSize.Favorites.Width
              : ImageSize.Default.Width
          }
          height={
            typesPage === TypesPage.Favorites
              ? ImageSize.Favorites.Height
              : ImageSize.Default.Height
          }
          alt="Place image"
        />
      </Link>
    </div>
  );
}

function Card({ isPremium, typesPage }: CardProps): JSX.Element {
  const articleClasses = cn('place-card', {
    ['cities__card']: typesPage === TypesPage.Main,
    ['near-places__card']: typesPage === TypesPage.Offer,
    ['favorites__card']: typesPage === TypesPage.Favorites,
  });
  return (
    <article className={articleClasses}>
      {isPremium && <Mark isCard />}
      <CardImage typesPage={typesPage} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€80</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton typesPage={typesPage} isCard isActive />
        </div>
        <Rating isCard />
        <h2 className="place-card__name">
          <Link to={Path.Offer}>Wood and stone place</Link>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  );
}

export default Card;
