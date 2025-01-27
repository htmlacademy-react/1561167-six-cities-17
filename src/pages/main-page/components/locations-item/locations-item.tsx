import { useCallback } from 'react';
import { LocationsItemLink } from '../../../../components/locations-item-link/locations-item-link';
import { useAppDispatch } from '../../../../hooks';
import { changeCity } from '../../../../store/city/city-slice';
import { CityKeys } from '../../../../types/cities';

type LocationsItemProps = {
  city: CityKeys;
  currentCity: CityKeys;
};

function LocationsItem({ city, currentCity }: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback(
    () => dispatch(changeCity(city)),
    [city, dispatch]
  );

  return (
    <li onClick={handleCityChange} className="locations__item">
      <LocationsItemLink city={city} isActive={city === currentCity} />
    </li>
  );
}

export { LocationsItem };
