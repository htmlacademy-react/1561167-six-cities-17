import { useEffect } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectAdaptToNearbyOffers,
  selectAuthorizationStatus,
  selectExtendedOffer,
  selectIsExtendedOfferLoading,
  selectIsNearbyOffersLoading,
  selectIsReviewsListLoading,
  selectReviewsList,
} from '../../store/selectors';
import { Title } from '../../components/title/title';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Map from '../../components/map/map';
import Mark from '../../components/mark/mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import Gallery from './components/gallery/gallery';
import { Features } from './components/features/features';
import { OfferInsideList } from './components/offer-inside-list/offer-inside-list';
import NotFoundPage from '../not-found-page/not-found-page';
import { LoadingPage } from '../loading-page/loadig-page';
import { NearbyOffers } from './components/nearby-offers/nearby-offers';
import { OfferReviews } from './components/offer-reviews/offer-reviews';
import {
  uploadExtendedOffer,
  uploadNearbyOffers,
  uploadReviewsList,
} from '../../store/api-actions';
import { useUrlId } from './utils';
import { adaptToMap } from '../../utils/utils';
import { AuthorizationStatus, TypesPage } from '../../const';
import { TypesPageKeys } from '../../types/types';
import {
  clearExtendedOffer,
  clearNearbyOffers,
  clearReviewsList,
} from '../../store/actions';

type OfferPageProps = {
  favoritesCount: number;
};

function OfferPage(props: OfferPageProps): JSX.Element {
  const { favoritesCount } = props;
  const typesPage: TypesPageKeys = TypesPage.Offer;

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const offerId = useUrlId();
  const isExtendedOfferLoading = useAppSelector(selectIsExtendedOfferLoading);
  const offer = useAppSelector(selectExtendedOffer);
  const isNearbyOffersLoading = useAppSelector(selectIsNearbyOffersLoading);
  const nearbyOffers = useAppSelector(selectAdaptToNearbyOffers);
  const isReviewsListLoading = useAppSelector(selectIsReviewsListLoading);
  const reviewsList = useAppSelector(selectReviewsList);

  useEffect(() => {
    if (!offerId) {
      return;
    }
    dispatch(uploadExtendedOffer(offerId))
      .unwrap()
      .then(() => {
        dispatch(uploadNearbyOffers(offerId));
        dispatch(uploadReviewsList(offerId));
      });
    return () => {
      dispatch(clearExtendedOffer());
      dispatch(clearNearbyOffers());
      dispatch(clearReviewsList());
    };
  }, [dispatch, offerId]);

  if (isExtendedOfferLoading || isNearbyOffersLoading || isReviewsListLoading) {
    return <LoadingPage />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host: { avatarUrl, name, isPro },
  } = offer;

  const avatarClasses = cn('offer__avatar-wrapper user__avatar-wrapper', {
    ['offer__avatar-wrapper--pro']: isPro,
  });

  return (
    <div className="page">
      <Header typesPage={typesPage}>
        <Nav favoritesCount={favoritesCount} />
      </Header>
      <main className="page__main page__main--offer">
        <Title typesPage={typesPage} />
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery images={images} />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <Mark />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton typesPage={typesPage} isActive={isFavorite} />
              </div>
              <Rating rating={rating} isOffer>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </Rating>
              <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideList internalOffers={goods} />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={avatarClasses}>
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt={name}
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              {(reviewsList.length > 0 || isLoggedIn) && (
                <OfferReviews reviews={reviewsList} isLoggedIn={isLoggedIn} />
              )}
            </div>
          </div>
          <Map
            points={adaptToMap(nearbyOffers, offer)}
            activeCardId={offerId}
            typesPage={typesPage}
          />
        </section>
        {nearbyOffers.length !== 0 && (
          <NearbyOffers offers={nearbyOffers} typesPage={typesPage} />
        )}
      </main>
    </div>
  );
}

export default OfferPage;
