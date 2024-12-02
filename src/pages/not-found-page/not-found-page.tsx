import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { Path, TypesPage } from '../../const';
import styles from './style.module.css';
import { TypesPageEnum } from '../../types/types';

function NotFoundPage(): JSX.Element {
  const typesPage: TypesPageEnum = TypesPage.Favorites;
  return (
    <div className="page page--favorites-empty">
      <Header typesPage={typesPage} />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className={`favorites__status-wrapper ${styles.wrapper}`}>
              <b className="favorites__status">Nothing is lost yet.</b>
              <p className="favorites__status-description">
                <Link to={Path.Root}>Go back to the main page.</Link>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer>
        <Logo typesPage={typesPage} isFooter />
      </Footer>
    </div>
  );
}

export default NotFoundPage;
