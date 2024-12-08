import cn from 'classnames';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import Logo from '../../components/logo/logo';
import CardsList from '../../components/cards-list/cards-list';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import { TypesPage } from '../../const';
import { Title } from '../../components/title/title';
import {
  CityType,
  FavoritesListType,
  GroupedOffersType,
  ShortOfferListType,
  TypesPageEnum,
} from '../../types/types';
import { groupByList } from './utils';

type FavoritePageProps = {
  favorites: FavoritesListType;
  isLoggedIn: boolean;
};

type FavoritesListProps = {
  typesPage: TypesPageEnum;
  groupedOffers: GroupedOffersType;
};

type FavoritesItemProps = {
  typesPage: TypesPageEnum;
  offers: ShortOfferListType;
  city: CityType;
};

function FavoriteEmpty(): JSX.Element {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">
        Save properties to narrow down search or plan your future trips.
      </p>
    </div>
  );
}

function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const { city, offers, typesPage } = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <LocationsItemLink city={city} typesPage={typesPage} isActive />
        </div>
      </div>
      <CardsList
        offers={offers}
        typesPage={typesPage}
      />
    </li>
  );
}

function FavoritesList({
  groupedOffers,
  typesPage,
}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((key) => (
        <FavoritesItem
          key={key as CityType}
          city={key as CityType}
          offers={groupedOffers[key]}
          typesPage={typesPage}
        />
      ))}
    </ul>
  );
}

function FavoritesPage(props: FavoritePageProps): JSX.Element {
  const { favorites, isLoggedIn } = props;
  const typesPage: TypesPageEnum = TypesPage.Favorites;
  const groupedOffers = groupByList(favorites);
  const isEmpty = !Object.keys(groupedOffers).length;

  const pageClasses = cn('page', { ['page--favorites-empty']: isEmpty });
  const mainClasses = cn('page__main page__main--favorites', {
    ['page__main--favorites-empty']: isEmpty,
  });
  const sectionClasses = cn('favorites', {
    ['favorites--empty']: isEmpty,
  });
  const titleClasses = cn({
    ['favorites__title']: !isEmpty,
    ['visually-hidden']: isEmpty,
  });

  return (
    <div className={pageClasses}>
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={favorites.length}
        />
      </Header>
      <Title typesPage={typesPage} isEmpty={isEmpty} />
      <main className={mainClasses}>
        <div className="page__favorites-container container">
          <section className={sectionClasses}>
            <h1 className={titleClasses}>
              {isEmpty ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {isEmpty ? (
              <FavoriteEmpty />
            ) : (
              <FavoritesList
                groupedOffers={groupedOffers}
                typesPage={typesPage}
              />
            )}
          </section>
        </div>
      </main>
      <Footer>
        <Logo typesPage={typesPage} isFooter />
      </Footer>
    </div>
  );
}

export default FavoritesPage;
