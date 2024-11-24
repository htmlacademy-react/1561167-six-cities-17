import Card from '../../components/card/card';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import { LOCATIONS, TypesPage } from '../../const';

type MainPageProps = {
  rentalOffersCount: number;
};

function MainPage({ rentalOffersCount }: MainPageProps): JSX.Element {
  const cards = Array.from({ length: rentalOffersCount }, (_, i) => (
    <Card key={i} isPremium typesPage={TypesPage.MAIN} />
  ));

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {cards}
              </div>
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
