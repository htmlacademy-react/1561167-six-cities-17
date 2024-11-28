import cn from 'classnames';
import CardsList from '../../components/cards-list/cards-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import Nav from '../../components/nav/nav';
import { Setting, TypesPage } from '../../const';
import { TypesPageEnum } from '../../types/types';

type FavoritePageProps = {
  isEmpty?: boolean;
  isLoggedIn: boolean;
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
      <main className={mainClasses}>
        <div className="page__favorites-container container">
          <section className={sectionClasses}>
            <h1 className={titleClasses}>
              {isEmpty ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {(isEmpty && <FavoriteEmpty />) || (
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <LocationsItemLink
                        location={'Amsterdam'}
                        typesPage={typesPage}
                      />
                    </div>
                  </div>
                  <CardsList
                    rentalOffersCount={Setting.RentalOffersCount}
                    typesPage={typesPage}
                  />
                </li>
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <CardsList
                    rentalOffersCount={Setting.RentalOffersCount}
                    typesPage={typesPage}
                  />
                </li>
              </ul>
            )}
          </section>
        </div>
      </main>
      <Footer typesPage={typesPage} />
    </div>
  );
}

export default FavoritePage;
