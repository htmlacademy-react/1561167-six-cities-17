import { memo, useMemo } from 'react';
import cn from 'classnames';
import { AuthorizationStatus, Page, Path } from '../../const';
import { SvgSize } from './settings';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectChangingStaus,
  selectOfferIsFavorite,
} from '../../store/favorites/favorites-selectors';
import { useNavigate } from 'react-router-dom';
import { selectAuthorizationStatus } from '../../store/user/user-selectors';
import { changeFavoriteStatus } from '../../store/api-actions';
import { FavoriteStatusKeys } from '../../types/favorites';
import { removeOfferFromFavoritesById } from '../../store/favorites/favorites-slice';
import {
  removeFavoritesStatus,
  setFavoritesStatus,
} from '../../store/offers/offers-slice';
import { selectCurrentPage } from '../../store/page/page-selectors';

type BookmarkButtonProps = {
  offerId: string;
  isCard?: boolean;
};

const BookmarkButton = memo((props: BookmarkButtonProps): JSX.Element => {
  const { offerId, isCard } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const page = useAppSelector(selectCurrentPage);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isNoAuthorized = useMemo(
    () => authorizationStatus !== AuthorizationStatus.Auth,
    [authorizationStatus]
  );
  const isChangingStaus = useAppSelector(selectChangingStaus);

  const isFavorite = useAppSelector((state) =>
    selectOfferIsFavorite(state, offerId)
  );

  const handleBookmarkButtonClick = () => {
    if (isNoAuthorized) {
      navigate(Path.Login);
      return;
    }

    const status = Number(!isFavorite) as FavoriteStatusKeys;
    dispatch(
      changeFavoriteStatus({
        offerId,
        status,
      })
    )
      .unwrap()
      .then(() => {
        if (!isFavorite) {
          dispatch(setFavoritesStatus(offerId));
        } else {
          dispatch(removeOfferFromFavoritesById(offerId));
          dispatch(removeFavoritesStatus(offerId));
        }
      });
  };

  const buttonClasses = cn('button', {
    ['place-card__bookmark-button--active']:
      isFavorite && !isNoAuthorized && page !== Page.Offer,
    ['offer__bookmark-button--active']:
      isFavorite && !isNoAuthorized && page === Page.Offer,
    ['place-card__bookmark-button']: isCard,
    ['offer__bookmark-button']: !isCard && page === Page.Offer,
  });
  const svgClasses = cn({
    ['place-card__bookmark-icon']: isCard,
    ['offer__bookmark-icon']: !isCard && page === Page.Offer,
  });
  const width = isCard ? SvgSize.Card.Width : SvgSize.OffCard.Width;
  const height = isCard ? SvgSize.Card.Height : SvgSize.OffCard.Height;
  const text = isFavorite ? 'In' : 'To';

  return (
    <button
      onClick={handleBookmarkButtonClick}
      className={buttonClasses}
      type="button"
      disabled={isChangingStaus}
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
