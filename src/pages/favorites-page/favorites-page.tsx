import cn from 'classnames';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Nav } from '../../components/nav/nav';
import { Logo } from '../../components/logo/logo';
import { Page } from '../../const';
import { Title } from '../../components/title/title';
import { groupByList } from './utils';
import { FavoriteEmpty } from './components/favorites-empty/favorites-empty';
import { FavoritesList } from './components/favorites-list/favorites-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectFavorites,
  selectFavoritesCount,
} from '../../store/favorites/favorites-selectors';
import { changePage } from '../../store/page/page-slice';
import { useEffect } from 'react';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePage(Page.Favorites));
  }, [dispatch]);

  const favorites = useAppSelector(selectFavorites);

  const groupedOffers = groupByList(favorites);
  const isEmpty = !useAppSelector(selectFavoritesCount);

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
      <Header>
        <Nav />
      </Header>
      <Title isEmpty={isEmpty} />
      <main className={mainClasses}>
        <div className="page__favorites-container container">
          <section className={sectionClasses}>
            <h1 className={titleClasses}>
              {isEmpty ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {isEmpty ? (
              <FavoriteEmpty />
            ) : (
              <FavoritesList groupedOffers={groupedOffers} />
            )}
          </section>
        </div>
      </main>
      <Footer>
        <Logo isFooter />
      </Footer>
    </div>
  );
}

export { FavoritesPage };
