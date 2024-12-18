import { useState } from 'react';
import {
  CityKeys,
  ShortOfferListType,
  SortTypeKeys,
  TypesPageKeys,
} from '../../../../types/types';
import Sort from '../sort/sort';
import CardsList from '../../../../components/cards-list/cards-list';
import { DEFAULT_SORTING_KEY } from '../../../../const';

type MainContentProps = {
  currentCity: CityKeys;
  shortOffers: ShortOfferListType;
  typesPage: TypesPageKeys;
  onCardHover: (id: string | null) => void;
};

function MainContent(props: MainContentProps): JSX.Element {
  const { currentCity, shortOffers, typesPage, onCardHover } = props;

  const [isOpenSorting, setIsOpenSorting] = useState<boolean>(false);
  const handleSortChange = () => setIsOpenSorting((prev) => !prev);

  const [currentSortKey, setCurrentSortKey] =
    useState<SortTypeKeys>(DEFAULT_SORTING_KEY);
  const handleSortKeyChange = (type: SortTypeKeys) => {
    setCurrentSortKey(type);
    setIsOpenSorting(false);
  };

  const lastCharacter = shortOffers.length !== 1 ? 's' : '';

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {shortOffers.length} {`place${lastCharacter}`} to stay in {currentCity}
      </b>
      <Sort
        isOpenSorting={isOpenSorting}
        onSortChange={handleSortChange}
        onSortKeyChange={handleSortKeyChange}
        currentSortKey={currentSortKey}
      />
      ,
      <CardsList
        offers={shortOffers}
        currentSortKey={currentSortKey}
        onCardHover={onCardHover}
        typesPage={typesPage}
      />
    </>
  );
}

export { MainContent };
