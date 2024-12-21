import cn from 'classnames';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import Logo from '../../components/logo/logo';
import { TypesPage } from '../../const';
import { Title } from '../../components/title/title';
import { FavoritesListType, TypesPageKeys } from '../../types/types';
import { groupByList } from './utils';
import { FavoriteEmpty } from './components/favorites-empty/favorites-empty';
import { FavoritesList } from './components/favorites-list/favorites-list';

type FavoritePageProps = {
  favorites: FavoritesListType;
  isLoggedIn: boolean;
};

function FavoritesPage({ favorites, isLoggedIn }: FavoritePageProps): JSX.Element {
  const typesPage: TypesPageKeys = TypesPage.Favorites;
  const groupedOffers = groupByList(favorites);
  const isEmpty = !Object.keys(groupedOffers).length;

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
      <Header typesPage={typesPage}>
        <Nav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={favorites.length}
        />
      </Header>
      <Title typesPage={typesPage} isEmpty={isEmpty} />
      <main className={mainClasses}>
        <div className="page__favorites-container container">
          <section className={sectionClasses}>
            <h1 className={titleClasses}>
              {isEmpty ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {isEmpty ? (
              <FavoriteEmpty />
            ) : (
              <FavoritesList
                groupedOffers={groupedOffers}
                typesPage={typesPage}
              />
            )}
          </section>
        </div>
      </main>
      <Footer>
        <Logo typesPage={typesPage} isFooter />
      </Footer>
    </div>
  );
}

export default FavoritesPage;
