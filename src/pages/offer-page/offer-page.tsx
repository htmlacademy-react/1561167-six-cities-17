import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { Title } from '../../components/title/title';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Mark from '../../components/mark/mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import { TypesPage, TypesSort } from '../../const';
import {
  FavoritesListType,
  OfferListType,
  ShortOfferType,
  TypesPageKeys,
} from '../../types/types';
import { offerReviews } from '../../mocks/offer-reviews';
import Gallery from './components/gallery/gallery';
import FeedbackForm from './components/feedback-form/feedback-form';
import { Features } from './components/features/features';
import { OfferInsideList } from './components/offer-inside-list/offer-inside-list';
import { getOfferById } from './utils';
import ReviewsList from './components/reviews-list/reviews-list';

type OfferPageProps = {
  offers: OfferListType;
  favorites: FavoritesListType;
  nearbyOffers: ShortOfferType[];
  isLoggedIn: boolean;
};

const useId = () => {
  const { offerId } = useParams();
  if (offerId === undefined) {
    return { offerId: null };
  }

  return { offerId };
};

function OfferPage(props: OfferPageProps): JSX.Element {
  const { offers, favorites, nearbyOffers, isLoggedIn } = props;
  const { offerId } = useId();
  const offer = getOfferById(offers, offerId);

  if (!offer) {
    throw new Error(`There is no ID:${offerId} element`);
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
  const nearbyOffersWithExtension = [...nearbyOffers, offer];
  const typesPage: TypesPageKeys = TypesPage.Offer;
  const avatarClasses = cn('offer__avatar-wrapper user__avatar-wrapper', {
    ['offer__avatar-wrapper--pro']: isPro,
  });

  return (
    <div className="page">
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={favorites.length}
        />
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
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{offerReviews.length}</span>
                </h2>
                <ReviewsList reviews={offerReviews} />
                {isLoggedIn && <FeedbackForm />}
              </section>
            </div>
          </div>
          <Map
            offers={nearbyOffersWithExtension}
            activeCardId={offerId}
            typesPage={typesPage}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList
                offers={nearbyOffers}
                currentSortKey={TypesSort.Popular}
                typesPage={typesPage}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
