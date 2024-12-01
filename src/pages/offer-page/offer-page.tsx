import CardsList from '../../components/cards-list/cards-list';
import Gallery from '../../components/gallery/gallery';
import Map from '../../components/map/map';
import Nav from '../../components/nav/nav';
import { TypesPage } from '../../const';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Mark from '../../components/mark/mark';
import Header from '../../components/header/header';
import { nanoid } from 'nanoid';
import FeedbackForm from '../../components/feedback-form/feedback-form';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import { TypesPageEnum } from '../../types/types';
import { Title } from '../../components/title/title';

type InsideItemProps = {
  item: string;
};

type InsideListProps = {
  internalOffers: ReadonlyArray<string>;
};

type OfferPageProps = {
  isLoggedIn: boolean;
};

const insideOffers: ReadonlyArray<string> = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

function OfferInsideItem({ item }: InsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{item}</li>;
}

function OfferInsideList({ internalOffers }: InsideListProps): JSX.Element {
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

function OfferPage({ isLoggedIn }: OfferPageProps): JSX.Element {
  const typesPage: TypesPageEnum = TypesPage.Offer;
  return (
    <div className="page">
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={3}
        />
      </Header>
      <main className="page__main page__main--offer">
        <Title typesPage={typesPage} />
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <Mark />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <BookmarkButton typesPage={typesPage} />
              </div>
              <Rating isOffer>
                <span className="offer__rating-value rating__value">4.8</span>
              </Rating>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideList internalOffers={insideOffers} />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ReviewsList />
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
              <CardsList rentalOffersCount={3} typesPage={typesPage} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
