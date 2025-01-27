import { useAppDispatch } from '../../../../hooks';
import { CardsList } from '../../../../components/cards-list/cards-list';
import { LocationsItemLink } from '../../../../components/locations-item-link/locations-item-link';
import { ShortOfferListType } from '../../../../types/offers';
import { CityKeys } from '../../../../types/cities';
import { changeCity } from '../../../../store/city/city-slice';
import { useCallback } from 'react';

type FavoritesItemProps = {
  city: CityKeys;
  offers: ShortOfferListType;
};

function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const { city, offers } = props;
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    () => dispatch(changeCity(city)),
    [city, dispatch]
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div onClick={handleCityClick} className="locations__item">
          <LocationsItemLink city={city} isActive />
        </div>
      </div>
      <CardsList offers={offers} />
    </li>
  );
}

export { FavoritesItem };
