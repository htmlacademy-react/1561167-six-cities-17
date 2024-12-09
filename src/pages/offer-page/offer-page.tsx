import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { Title } from '../../components/title/title';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Gallery from '../../components/gallery/gallery';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Mark from '../../components/mark/mark';
import FeedbackForm from '../../components/feedback-form/feedback-form';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import { TypesPage } from '../../const';
import {
  FavoritesListType,
  OfferListType,
  OfferType,
  ReviewListType,
  ShortOfferType,
  TypesPageEnum,
} from '../../types/types';
import { offerReviews } from '../../mocks/offer-reviews';

type InsideItemProps = {
  item: string;
};

type InsideListProps = {
  internalOffers: string[];
};

type OfferPageProps = {
  offers: OfferListType;
  favorites: FavoritesListType;
  nearbyOffers: ShortOfferType[];
  isLoggedIn: boolean;
};

type FeaturesProps = Pick<OfferType, 'type' | 'bedrooms' | 'maxAdults'>;

function Features({ type, bedrooms, maxAdults }: FeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{type}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

function OfferInsideItem({ item }: InsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{item}</li>;
}

function OfferInsideList(props: InsideListProps): JSX.Element {
  const { internalOffers } = props;
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {internalOffers.map((item) => (
          <OfferInsideItem key={nanoid()} item={item} />
        ))}
      </ul>
    </div>
  );
}

function OfferPage({
  offers,
  favorites,
  nearbyOffers,
  isLoggedIn,
}: OfferPageProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find(({ id }) => id === offerId);

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
  const reviews: ReviewListType = offerReviews;
  const typesPage: TypesPageEnum = TypesPage.Offer;
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
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                {isLoggedIn && <FeedbackForm />}
              </section>
            </div>
          </div>
          <Map className="offer__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList
                offers={nearbyOffers}
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
