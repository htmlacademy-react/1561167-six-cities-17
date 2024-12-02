import { nanoid } from 'nanoid';
import LocationsItemLink from '../locations-item-link/locations-item-link';
import { DEFAULT_ACTIVE_CITY } from '../../const';
import { CitiesType, CityProps, TypesPageEnum } from '../../types/types';

type LocationsListProps = {
  cities: CitiesType;
  typesPage: TypesPageEnum;
};

function LocationsItem(props: CityProps): JSX.Element {
  const { city, isActive, typesPage } = props;
  return (
    <li className="locations__item">
      <LocationsItemLink
        city={city}
        typesPage={typesPage}
        isActive={isActive}
      />
    </li>
  );
}

function LocationsList({ cities, typesPage }: LocationsListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsItem
          key={nanoid()}
          typesPage={typesPage}
          city={city}
          isActive={city === DEFAULT_ACTIVE_CITY}
        />
      ))}
    </ul>
  );
}

export default LocationsList;
