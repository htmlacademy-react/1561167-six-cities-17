import { CityProps, CityType, CurrentCityChangeType } from '../../types/types';
import LocationsItemLink from '../locations-item-link/locations-item-link';

function LocationsItem(
  props: CityProps & {
    currentCity: CityType;
    onCurrentCityChange: CurrentCityChangeType;
  }
): JSX.Element {
  const { city, currentCity, onCurrentCityChange, typesPage } = props;

  return (
    <li onClick={()=>onCurrentCityChange(city)} className="locations__item">
      <LocationsItemLink
        city={city}
        typesPage={typesPage}
        isActive={city === currentCity}
      />
    </li>
  );
}

export { LocationsItem };
