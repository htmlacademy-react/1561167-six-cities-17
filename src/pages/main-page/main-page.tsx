import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import LocationsList from '../../components/locations-list/locations-list';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { DEFAULT_SORTING_TYPE, LOCATIONS, TypesPage } from '../../const';
import { LocationProps, TypesPageEnum } from '../../types/types';

type MainPageProps = {
  isLoggedIn: boolean;
  rentalOffersCount: number;
  isEmpty?: boolean;
};

type MainEmptyProps = Pick<LocationProps, 'location'>;

type MainContentProps = {
  rentalOffersCount: number;
  typesPage: TypesPageEnum;
};

function MainEmpty({ location }: MainEmptyProps): JSX.Element {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        We could not find any property available at the moment in {location}
      </p>
    </div>
  );
}

function MainContent(props: MainContentProps): JSX.Element {
  const { rentalOffersCount, typesPage } = props;
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {rentalOffersCount} places to stay in Amsterdam
      </b>
      <Sort currentSortType={DEFAULT_SORTING_TYPE} />
      <CardsList rentalOffersCount={rentalOffersCount} typesPage={typesPage} />
    </>
  );
}

function MainPage(props: MainPageProps): JSX.Element {
  const { rentalOffersCount, isLoggedIn, isEmpty = false } = props;
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
            <LocationsList locations={LOCATIONS} typesPage={typesPage} />
          </section>
        </div>
        <div className="cities">
          <div className={containerClasses}>
            <section className={sectionClasses}>
              {isEmpty ? (
                <MainEmpty location={'Dusseldorf'} />
              ) : (
                <MainContent
                  rentalOffersCount={rentalOffersCount}
                  typesPage={typesPage}
                />
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
