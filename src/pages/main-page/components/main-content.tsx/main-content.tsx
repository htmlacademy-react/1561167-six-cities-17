import {
  CityKeys,
  ShortOfferListType,
  TypesPageKeys,
} from '../../../../types/types';
import Sort from '../sort/sort';
import CardsList from '../../../../components/cards-list/cards-list';

type MainContentProps = {
  currentCity: CityKeys;
  shortOffers: ShortOfferListType;
  typesPage: TypesPageKeys;
  onCardHover: (id: string | null) => void;
};

function MainContent(props: MainContentProps): JSX.Element {
  const { currentCity, shortOffers, typesPage, onCardHover } = props;

  const lastCharacter = shortOffers.length !== 1 ? 's' : '';

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {shortOffers.length} {`place${lastCharacter}`} to stay in {currentCity}
      </b>
      <Sort />
      ,
      <CardsList
        offers={shortOffers}
        onCardHover={onCardHover}
        typesPage={typesPage}
      />
    </>
  );
}

export { MainContent };
