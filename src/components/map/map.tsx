import cn from 'classnames';
import { CityType, ShortOfferListType, TypesPageEnum } from '../../types/types';
import styles from './style.module.css';
import { TypesPage } from '../../const';

type MapProps = {
  typesPage: TypesPageEnum;
  city: CityType;
  offers: ShortOfferListType;
};

function Map({ typesPage, city, offers }: MapProps): JSX.Element {
  const classesMap = cn('map', {
    ['cities__map']: typesPage === TypesPage.Main,
    ['offer__map']: typesPage === TypesPage.Offer,
  });

  console.log('Map ~ offers:', offers);

  return (
    <section className={`${classesMap} ${styles.wrapper}`}>
      <span className="visually-hidden">{city}</span>
    </section>
  );
}

export default Map;
