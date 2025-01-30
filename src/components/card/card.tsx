import cn from 'classnames';
import { Page, Path } from '../../const';
import { Mark } from '../mark/mark';
import { Rating } from '../rating/rating';
import { ImageSize } from './settings';
import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { generatePath, Link } from 'react-router-dom';
import { OnCardHoverType } from '../../types/types';
import { ShortOfferType } from '../../types/offers';
import { PageKeys } from '../../types/page';
import { toCapitalizeSentence } from '../../utils/utils';

type CardProps = {
  page: PageKeys;
  offer: ShortOfferType;
  onCardHover?: OnCardHoverType;
};

type CardImageProps = {
  id: string;
  src: string;
  title: string;
  page: PageKeys;
};

function CardImage(props: CardImageProps): JSX.Element {
  const { id, src, title, page } = props;
  const wrapperClasses = cn('place-card__image-wrapper', {
    ['cities__image-wrapper']: page === Page.Main,
    ['near-places__image-wrapper']: page === Page.Offer,
    ['favorites__image-wrapper']: page === Page.Favorites,
  });

  return (
    <div className={wrapperClasses}>
      <Link to={generatePath(Path.Offer, { offerId: id })}>
        <img
          className="place-card__image"
          src={src}
          width={
            page === Page.Favorites
              ? ImageSize.Favorites.Width
              : ImageSize.Default.Width
          }
          height={
            page === Page.Favorites
              ? ImageSize.Favorites.Height
              : ImageSize.Default.Height
          }
          alt={title}
        />
      </Link>
    </div>
  );
}

function Card({ offer, onCardHover, page }: CardProps): JSX.Element {
  const {
    id,
    isPremium,
    previewImage,
    title,
    price,
    rating,
    type,
    isFavorite,
  } = offer;
  const articleClasses = cn('place-card', {
    ['cities__card']: page === Page.Main,
    ['near-places__card']: page === Page.Offer,
    ['favorites__card']: page === Page.Favorites,
  });

  return (
    <article
      onMouseEnter={() => onCardHover && onCardHover(id)}
      onMouseLeave={() => onCardHover && onCardHover(null)}
      className={articleClasses}
    >
      {isPremium && <Mark isCard />}
      <CardImage id={id} src={previewImage} title={title} page={page} />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton offerId={id} isCard isFavorite={isFavorite} />
        </div>
        <Rating rating={rating} isCard />
        <h2 className="place-card__name">
          <Link to={generatePath(Path.Offer, { offerId: id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{toCapitalizeSentence(type)}</p>
      </div>
    </article>
  );
}

export default Card;
