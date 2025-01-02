import cn from 'classnames';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { LocationsList } from './components/locations-list/locations-list';
import { LocationsItem } from './components/locations-item/locations-item';
import {
  AuthorizationStatus,
  CITIES,
  DEFAULT_SORTING_KEY,
  TypesPage,
} from '../../const';
import { TypesPageKeys } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Content } from './components/content/content';
import {
  selectAuthorizationStatus,
  selectFilteredOffers,
} from '../../store/selectors';
import { changeSortKey } from '../../store/actions';
import { useEffect } from 'react';

type MainPageProps = {
  favoritesCount: number;
};

function MainPage({ favoritesCount }: MainPageProps): JSX.Element {
  const cityOffers = useAppSelector(selectFilteredOffers);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();

  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;
  const isEmpty = cityOffers.length === 0;

  const typesPage: TypesPageKeys = TypesPage.Main;
  const mainClasses = cn('page__main page__main--index', {
    ['page__main--index-empty']: isEmpty,
  });

  useEffect(() => {
    dispatch(changeSortKey(DEFAULT_SORTING_KEY));
  }, [cityOffers, dispatch]);

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
                <LocationsItem key={city} city={city} typesPage={typesPage} />
              ))}
            </LocationsList>
          </section>
        </div>
        <div className="cities">
          <Content cityOffers={cityOffers} typesPage={typesPage} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
