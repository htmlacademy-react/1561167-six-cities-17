import LocationsItemLink from '../../../../components/locations-item-link/locations-item-link';
import { useAppDispatch } from '../../../../hooks';
import { cityChange } from '../../../../store/action';
import { CityProps, CityKeys } from '../../../../types/types';

function LocationsItem(
  props: CityProps & {
    currentCity: CityKeys;
  }
): JSX.Element {
  const { city, currentCity, typesPage } = props;
  const dispatch = useAppDispatch();

  return (
    <li onClick={() => dispatch(cityChange(city))} className="locations__item">
      <LocationsItemLink
        city={city}
        typesPage={typesPage}
        isActive={city === currentCity}
      />
    </li>
  );
}

export { LocationsItem };
