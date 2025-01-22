import LocationsItemLink from '../../../../components/locations-item-link/locations-item-link';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectCurrentCity } from '../../../../store/city/city-selectors';
import { changeCity } from '../../../../store/city/city-slice';
import { CityProps } from '../../../../types/cities';

function LocationsItem({ city, typesPage }: CityProps): JSX.Element {
  const currentCity = useAppSelector(selectCurrentCity);
  const dispatch = useAppDispatch();

  return (
    <li onClick={() => dispatch(changeCity(city))} className="locations__item">
      <LocationsItemLink
        city={city}
        typesPage={typesPage}
        isActive={city === currentCity}
      />
    </li>
  );
}

export { LocationsItem };
