import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import { CITIES, TypesPage } from '../../const';
import { TypesPageKeys } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { filterOffersByCity } from './utils';
import { Content } from './components/content/content';
import { selectCurrentCity, selectOffers } from '../../store/selectors';

type MainPageProps = {
  isLoggedIn: boolean;
  favoritesCount: number;
};

function MainPage({ isLoggedIn, favoritesCount }: MainPageProps): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCurrentCity);
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
          favoritesCount={favoritesCount}
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
                  typesPage={typesPage}
                />
              ))}
            </LocationsList>
          </section>
        </div>
        <div className="cities">
          <Content
            cityOffers={cityOffers}
            typesPage={typesPage}
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
