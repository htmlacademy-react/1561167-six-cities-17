import { memo } from 'react';
import cn from 'classnames';
import { AuthorizationStatus, Path, TypesPage } from '../../const';
import { SvgSize } from './settings';
import { TypesPageKeys } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/favorites/favorites-selectors';
import { useNavigate } from 'react-router-dom';
import { selectAuthorizationStatus } from '../../store/user/user-selectors';

type BookmarkButtonProps = {
  typesPage: TypesPageKeys;
  offerId: string;
  isCard?: boolean;
};

const BookmarkButton = memo((props: BookmarkButtonProps): JSX.Element => {
  const { typesPage, offerId, isCard } = props;

  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const favorites = useAppSelector(selectFavorites);
  const isActive = favorites.includes(offerId);

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(Path.Login);
    }

    // Изменение статуса
  };

  const buttonClasses = cn('button', {
    ['place-card__bookmark-button--active']: isActive,
    ['place-card__bookmark-button']: isCard,
    ['offer__bookmark-button']: !isCard && typesPage === TypesPage.Offer,
  });
  const svgClasses = cn({
    ['place-card__bookmark-icon']: isCard,
    ['offer__bookmark-icon']: !isCard && typesPage === TypesPage.Offer,
  });
  const width = isCard ? SvgSize.Card.Width : SvgSize.OffCard.Width;
  const height = isCard ? SvgSize.Card.Height : SvgSize.OffCard.Height;
  const text = isActive ? 'In' : 'To';

  return (
    <button
      onClick={handleBookmarkButtonClick}
      className={buttonClasses}
      type="button"
    >
      <svg className={svgClasses} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${text} bookmarks`}</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export { BookmarkButton };
