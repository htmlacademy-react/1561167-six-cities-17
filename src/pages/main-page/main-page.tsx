import { nanoid } from 'nanoid';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { DEFAULT_SORTING_TYPE, LOCATIONS, TypesPage } from '../../const';

type MainPageProps = {
  rentalOffersCount: number;
};

function MainPage({ rentalOffersCount }: MainPageProps): JSX.Element {
  const cards = Array.from({ length: rentalOffersCount }, () => (
    <Card key={nanoid()} isPremium typesPage={TypesPage.MAIN} />
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
              <Sort currentSortType={DEFAULT_SORTING_TYPE} />
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
