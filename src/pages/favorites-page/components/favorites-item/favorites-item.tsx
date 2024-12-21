import CardsList from '../../../../components/cards-list/cards-list';
import LocationsItemLink from '../../../../components/locations-item-link/locations-item-link';
import { TypesSort } from '../../../../const';
import { store } from '../../../../store';
import { cityChange } from '../../../../store/action';
import {
  CityKeys,
  ShortOfferListType,
  TypesPageKeys,
} from '../../../../types/types';

type FavoritesItemProps = {
  typesPage: TypesPageKeys;
  offers: ShortOfferListType;
  city: CityKeys;
};

function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const { city, offers, typesPage } = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div
          onClick={() => store.dispatch(cityChange(city))}
          className="locations__item"
        >
          <LocationsItemLink city={city} typesPage={typesPage} />
        </div>
      </div>
      <CardsList
        offers={offers}
        currentSortKey={TypesSort.Popular}
        typesPage={typesPage}
      />
    </li>
  );
}

export { FavoritesItem };
