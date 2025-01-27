import { useCallback, useState } from 'react';
import cn from 'classnames';
import { OffersEmpty } from '../offers-empty/offers-empty';
import { Offers } from '../offers.tsx/offers';
import { Map } from '../../../../components/map/map';
import { adaptToMap } from '../../../../utils/utils';
import { ShortOfferListType } from '../../../../types/offers';

type ContentPros = {
  cityOffers: ShortOfferListType;
};

function Content({ cityOffers }: ContentPros): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardHover = useCallback(
    (id: string | null) => setActiveCardId(id),
    []
  );

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
          <OffersEmpty />
        ) : (
          <Offers onCardHover={handleCardHover} />
        )}
      </section>
      <div className="cities__right-section">
        {isEmpty || (
          <Map
            points={adaptToMap(cityOffers)}
            activeCardId={activeCardId}
          />
        )}
      </div>
    </div>
  );
}

export { Content };
