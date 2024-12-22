import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import { CITIES, TypesPage } from '../../const';
import { FavoritesListType, TypesPageKeys } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { filterOffersByCity } from './utils';
import { Content } from './components/content/content';

type MainPageProps = {
  isLoggedIn: boolean;
  favorites: FavoritesListType;
};

function MainPage({ isLoggedIn, favorites }: MainPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const cityOffers = filterOffersByCity(offers, currentCity);
  const isEmpty = cityOffers.length === 0;


  const typesPage: TypesPageKeys = TypesPage.Main;
  const mainClasses = cn('page__main page__main--index', {
    ['page__main--index-empty']: isEmpty,
  });

  return (
    <div className="page page--gray page--main">
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={favorites.length}
        />
      </Header>
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList>
              {CITIES.map((city) => (
                <LocationsItem
                  key={city}
                  city={city}
                  currentCity={currentCity}
                  typesPage={typesPage}
                />
              ))}
            </LocationsList>
          </section>
        </div>
        <div className="cities">
          <Content
            cityOffers={cityOffers}
            currentCity={currentCity}
            typesPage={typesPage}
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
