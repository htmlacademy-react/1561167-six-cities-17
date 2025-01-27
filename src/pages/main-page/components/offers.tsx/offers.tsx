import { memo } from 'react';
import { useAppSelector } from '../../../../hooks';
import { selectCurrentCity } from '../../../../store/city/city-selectors';
import { selectSortedOffers } from '../../../../store/offers/offers-selectors';
import { CardsList } from '../../../../components/cards-list/cards-list';
import { Sort } from '../sort/sort';

type OffersProps = {
  onCardHover: (id: string | null) => void;
};

const Offers = memo((props: OffersProps): JSX.Element => {
  const {onCardHover } = props;

  const currentCity = useAppSelector(selectCurrentCity);
  const sortedOffers = useAppSelector(selectSortedOffers);

  const lastCharacter = sortedOffers.length !== 1 ? 's' : '';

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortedOffers.length} {`place${lastCharacter}`} to stay in {currentCity}
      </b>
      <Sort />
      <CardsList
        offers={sortedOffers}
        onCardHover={onCardHover}
      />
    </>
  );
});

Offers.displayName = 'Offers';

export { Offers };
