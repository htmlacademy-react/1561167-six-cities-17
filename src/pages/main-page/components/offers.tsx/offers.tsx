import { TypesPageKeys } from '../../../../types/types';
import Sort from '../sort/sort';
import CardsList from '../../../../components/cards-list/cards-list';
import { useAppSelector } from '../../../../hooks';
import {
  selectCurrentCity,
  selectSortedOffers,
} from '../../../../store/selectors';

type OffersProps = {
  typesPage: TypesPageKeys;
  onCardHover: (id: string | null) => void;
};

function Offers(props: OffersProps): JSX.Element {
  const { typesPage, onCardHover } = props;

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
        typesPage={typesPage}
      />
    </>
  );
}

export { Offers };
