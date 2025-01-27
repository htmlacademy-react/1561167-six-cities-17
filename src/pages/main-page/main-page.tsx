import cn from 'classnames';
import { Header } from '../../components/header/header';
import { Nav } from '../../components/nav/nav';
import { LocationsList } from './components/locations-list/locations-list';
import { DEFAULT_SORTING_KEY, Page } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Content } from './components/content/content';
import { useEffect } from 'react';
import { selectFilteredOffers } from '../../store/offers/offers-selectors';
import { changeSortKey } from '../../store/sort-key/sort-key-slice';
import { changePage } from '../../store/page/page-slice';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePage(Page.Main));
  }, [dispatch]);

  const cityOffers = useAppSelector(selectFilteredOffers);

  const isEmpty = cityOffers.length === 0;

  const mainClasses = cn('page__main page__main--index', {
    ['page__main--index-empty']: isEmpty,
  });

  useEffect(() => {
    dispatch(changeSortKey(DEFAULT_SORTING_KEY));
  }, [cityOffers, dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header>
        <Nav />
      </Header>
      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <Content cityOffers={cityOffers} />
        </div>
      </main>
    </div>
  );
}

export { MainPage };
