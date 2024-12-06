import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import LocationsList from '../../components/locations-list/locations-list';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { DEFAULT_SORTING_TYPE, CITIES, TypesPage } from '../../const';
import {
  CityProps,
  ShortOfferListType,
  TypesPageEnum,
} from '../../types/types';
import { useState } from 'react';

type MainPageProps = {
  isLoggedIn: boolean;
  shortOffers: ShortOfferListType;
};

type MainEmptyProps = Pick<CityProps, 'city'>;

type MainContentProps = {
  offersCount: number;
  children: JSX.Element[];
};

function MainEmpty({ city }: MainEmptyProps): JSX.Element {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        We could not find any property available at the moment in {city}
      </p>
    </div>
  );
}

function MainContent({ offersCount, children }: MainContentProps): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      {children}
    </>
  );
}

function MainPage({ shortOffers, isLoggedIn }: MainPageProps): JSX.Element {
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

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardChange = (id: string | null) => setActiveCardId(id);

  return (
    <div className="page page--gray page--main">
      {activeCardId}
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={3}
        />
      </Header>
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cities={CITIES} typesPage={typesPage} />
          </section>
        </div>
        <div className="cities">
          <div className={containerClasses}>
            <section className={sectionClasses}>
              {isEmpty ? (
                <MainEmpty city={'Dusseldorf'} />
              ) : (
                <MainContent offersCount={shortOffers.length}>
                  <Sort currentSortType={DEFAULT_SORTING_TYPE} />
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
