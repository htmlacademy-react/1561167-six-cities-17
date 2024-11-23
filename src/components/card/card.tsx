import { BookmarkButtonValue, PageType } from '../../const';
import BookmarkButton from '../bookmark-button/bookmark-button';

type CardProps = {
  isPremium?: boolean;
  pageType: string;
};

function Card({ isPremium, pageType }: CardProps): JSX.Element {
  return (
    <article className={`${pageType}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src="img/room.jpg"
            width={pageType === PageType.FAVORITES ? 150 : 260}
            height={pageType === PageType.FAVORITES ? 200 : 110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€80</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            isButtonActive
            buttonAttributesValue={BookmarkButtonValue}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Wood and stone place</a>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  );
}

export default Card;
