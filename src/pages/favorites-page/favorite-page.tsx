import cn from 'classnames';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import Logo from '../../components/logo/logo';
import CardsList from '../../components/cards-list/cards-list';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import { Setting, TypesPage } from '../../const';
import { LocationProps, TypesPageEnum } from '../../types/types';
import { Title } from '../../components/title/title';

type FavoritePageProps = {
  isEmpty?: boolean;
  isLoggedIn: boolean;
};

type FavoritesProps = Omit<LocationProps, 'isActive'>;

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

function FavoritesItem({ typesPage, location }: FavoritesProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <LocationsItemLink location={location} typesPage={typesPage} />
        </div>
      </div>
      <CardsList
        rentalOffersCount={Setting.RentalOffersCount}
        typesPage={typesPage}
      />
    </li>
  );
}

function FavoritesList({ typesPage, location }: FavoritesProps): JSX.Element {
  const items = Array.from({ length: 2 }, (_, i) => i + 1);
  return (
    <ul className="favorites__list">
      {items.map((item) => (
        <FavoritesItem
          key={`${item}${location}`}
          typesPage={typesPage}
          location={location}
        />
      ))}
    </ul>
  );
}

function FavoritePage(props: FavoritePageProps): JSX.Element {
  const { isLoggedIn, isEmpty = false } = props;
  const typesPage: TypesPageEnum = TypesPage.Favorites;
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
          favoriteCount={3}
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
              <FavoritesList typesPage={typesPage} location={'Amsterdam'} />
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

export default FavoritePage;
