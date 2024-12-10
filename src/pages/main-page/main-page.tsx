import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Sort from './components/sort/sort';
import { CITIES, DEFAULT_SORTING_TYPE, TypesPage } from '../../const';
import {
  CityType,
  FavoritesListType,
  ShortOfferListType,
  TypesPageEnum,
} from '../../types/types';
import { useState } from 'react';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import { MainEmpty } from './components/main-empty/main-empty';
import { MainContent } from './components/main-content.tsx/main-content';

type MainPageProps = {
  currentCity: CityType;
  onCurrentCityChange: (city: CityType) => void;
  isLoggedIn: boolean;
  shortOffers: ShortOfferListType;
  favorites: FavoritesListType;
};

function MainPage({
  currentCity,
  onCurrentCityChange,
  shortOffers,
  isLoggedIn,
  favorites,
}: MainPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardChange = (id: string | null) => setActiveCardId(id);

  const isEmpty = shortOffers.length === 0;
  const typesPage: TypesPageEnum = TypesPage.Main;
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
                  onCurrentCityChange={onCurrentCityChange}
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
                <MainEmpty city={'Dusseldorf'} />
              ) : (
                <MainContent
                  currentCity={currentCity}
                  offersCount={shortOffers.length}
                >
                  <Sort currentSortType={DEFAULT_SORTING_TYPE} />,
                  <CardsList
                    offers={shortOffers}
                    onCardChange={handleCardChange}
                    typesPage={typesPage}
                  />
                </MainContent>
              )}
            </section>
            <div className="cities__right-section">
              {isEmpty || <Map className={'cities__map'} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
