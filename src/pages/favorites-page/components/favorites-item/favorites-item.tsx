import { useAppDispatch } from '../../../../hooks';
import CardsList from '../../../../components/cards-list/cards-list';
import LocationsItemLink from '../../../../components/locations-item-link/locations-item-link';
import { changeCity } from '../../../../store/actions';
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
  const dispatch = useAppDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div
          onClick={() => dispatch(changeCity(city))}
          className="locations__item"
        >
          <LocationsItemLink city={city} typesPage={typesPage} />
        </div>
      </div>
      <CardsList offers={offers} typesPage={typesPage} />
    </li>
  );
}

export { FavoritesItem };
