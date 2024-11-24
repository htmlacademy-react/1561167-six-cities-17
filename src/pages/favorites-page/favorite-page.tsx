import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { TypesPage } from '../../const';

function FavoritePage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <Card isPremium typesPage={TypesPage.FAVORITES} />
                  <Card typesPage={TypesPage.FAVORITES} />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <Card isPremium typesPage={TypesPage.FAVORITES} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer pageType={TypesPage.FAVORITES} />
    </div>
  );
}

export default FavoritePage;
