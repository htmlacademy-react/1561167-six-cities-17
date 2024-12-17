import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Sort from './components/sort/sort';
import { CITIES, DEFAULT_SORTING_KEY, TypesPage } from '../../const';
import {
  CityKeys,
  FavoritesListType,
  ShortOfferListType,
  SortTypeKeys,
  TypesPageKeys,
} from '../../types/types';
import { useState } from 'react';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import { MainEmpty } from './components/main-empty/main-empty';
import { MainContent } from './components/main-content.tsx/main-content';

type MainPageProps = {
  currentCity: CityKeys;
  onCurrentCityChange: (city: CityKeys) => void;
  isLoggedIn: boolean;
  cityOffers: ShortOfferListType;
  favorites: FavoritesListType;
};

function MainPage({
  currentCity,
  onCurrentCityChange,
  cityOffers,
  isLoggedIn,
  favorites,
}: MainPageProps): JSX.Element {
  const isEmpty = cityOffers.length === 0;
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

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardHover = (id: string | null) => setActiveCardId(id);

  const [isOpenSorting, setIsOpenSorting] = useState<boolean>(false);
  const handleSortChange = () => setIsOpenSorting((prev) => !prev);

  const [currentSortKey, setCurrentSortKey] =
    useState<SortTypeKeys>(DEFAULT_SORTING_KEY);
  const handleSortKeyChange = (type: SortTypeKeys) => {
    setCurrentSortKey(type);
    setIsOpenSorting(false);
  };

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
                <MainEmpty city={currentCity} />
              ) : (
                <MainContent
                  currentCity={currentCity}
                  offersCount={cityOffers.length}
                >
                  <Sort
                    isOpenSorting={isOpenSorting}
                    onSortChange={handleSortChange}
                    onSortKeyChange={handleSortKeyChange}
                    currentSortKey={currentSortKey}
                  />
                  ,
                  <CardsList
                    offers={cityOffers}
                    currentSortKey={currentSortKey}
                    onCardHover={handleCardHover}
                    typesPage={typesPage}
                  />
                </MainContent>
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
