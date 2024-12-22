import { useState } from 'react';
import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Map from '../../components/map/map';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import { MainEmpty } from './components/main-empty/main-empty';
import { MainContent } from './components/main-content.tsx/main-content';
import { CITIES, TypesPage } from '../../const';
import { FavoritesListType, TypesPageKeys } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { filterOffersByCity } from './utils';

type MainPageProps = {
  isLoggedIn: boolean;
  favorites: FavoritesListType;
};

function MainPage({ isLoggedIn, favorites }: MainPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const cityOffers = filterOffersByCity(offers, currentCity);
  const isEmpty = cityOffers.length === 0;

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardHover = (id: string | null) => setActiveCardId(id);

  const typesPage: TypesPageKeys = TypesPage.Main;
  const mainClasses = cn('page__main page__main--index', {
    ['page__main--index-empty']: isEmpty,
  });
  const containerClasses = cn('cities__places-container container', {
    ['cities__places-container--empty']: isEmpty,
  });
  const sectionClasses = cn({
    ['cities__places places']: !isEmpty,
    ['cities__no-places']: isEmpty,
  });

  return (
    <div className="page page--gray page--main">
      <span className="visually-hidden">{activeCardId}</span>
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
          <div className={containerClasses}>
            <section className={sectionClasses}>
              {isEmpty ? (
                <MainEmpty city={currentCity} />
              ) : (
                <MainContent
                  currentCity={currentCity}
                  onCardHover={handleCardHover}
                  offers={cityOffers}
                  typesPage={typesPage}
                />
              )}
            </section>
            <div className="cities__right-section">
              {isEmpty || (
                <Map
                  offers={cityOffers}
                  activeCardId={activeCardId}
                  typesPage={typesPage}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
