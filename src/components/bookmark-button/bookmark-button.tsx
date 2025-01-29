import { memo, useMemo } from 'react';
import cn from 'classnames';
import { AuthorizationStatus, Page, Path } from '../../const';
import { SvgSize } from './settings';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectChangingStaus } from '../../store/favorites/favorites-selectors';
import { useNavigate } from 'react-router-dom';
import { selectAuthorizationStatus } from '../../store/user/user-selectors';
import { changeFavoriteStatus } from '../../store/api-actions';
import { FavoriteStatusKeys } from '../../types/favorites';
import { selectCurrentPage } from '../../store/page/page-selectors';
import { processErrorHandle } from '../../services/process-error-handle';
import { updateOfferStatus } from '../../store/offers/offers-slice';
import { updateExtendedOfferStatus } from '../../store/extended-offer/extended-offer-slice';
import { OfferUpdate } from '../../types/offers';

type BookmarkButtonProps = {
  isFavorite: boolean;
  offerId: string;
  isCard?: boolean;
};

const BookmarkButton = memo((props: BookmarkButtonProps): JSX.Element => {
  const { offerId, isCard, isFavorite } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const page = useAppSelector(selectCurrentPage);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isNoAuthorized = useMemo(
    () => authorizationStatus !== AuthorizationStatus.Auth,
    [authorizationStatus]
  );
  const isChangingStaus = useAppSelector(selectChangingStaus);

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
        const updated: OfferUpdate = { id: offerId, isFavorite: !!status };
        dispatch(updateOfferStatus(updated));
        dispatch(updateExtendedOfferStatus(updated));
      })
      .catch(({ message }) =>
        processErrorHandle(`${message}. Try again later.`)
      );
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
