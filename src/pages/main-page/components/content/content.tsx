import { useState } from 'react';
import cn from 'classnames';
import { OffersEmpty } from '../offers-empty/offers-empty';
import { Offers } from '../offers.tsx/offers';
import Map from '../../../../components/map/map';
import {
  CityKeys,
  ShortOfferListType,
  TypesPageKeys,
} from '../../../../types/types';
import { adaptToMap } from '../../../../utils/utils';

type ContentPros = {
  currentCity: CityKeys;
  cityOffers: ShortOfferListType;
  typesPage: TypesPageKeys;
};

function Content(props: ContentPros): JSX.Element {
  const { cityOffers, currentCity, typesPage } = props;

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardHover = (id: string | null) => setActiveCardId(id);

  const isEmpty = cityOffers.length === 0;

  const containerClasses = cn('cities__places-container container', {
    ['cities__places-container--empty']: isEmpty,
  });
  const sectionClasses = cn({
    ['cities__places places']: !isEmpty,
    ['cities__no-places']: isEmpty,
  });
  return (
    <div className={containerClasses}>
      <section className={sectionClasses}>
        {isEmpty ? (
          <OffersEmpty city={currentCity} />
        ) : (
          <Offers
            currentCity={currentCity}
            onCardHover={handleCardHover}
            offers={cityOffers}
            typesPage={typesPage}
          />
        )}
      </section>
      <div className="cities__right-section">
        {isEmpty || (
          <Map
            points={adaptToMap(cityOffers)}
            activeCardId={activeCardId}
            typesPage={typesPage}
          />
        )}
      </div>
    </div>
  );
}

export { Content };
