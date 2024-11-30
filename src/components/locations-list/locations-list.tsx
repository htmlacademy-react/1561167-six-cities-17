import { nanoid } from 'nanoid';
import { DEFAULT_ACTIVE_LOCATION } from '../../const';
import LocationsItemLink from '../locations-item-link/locations-item-link';
import { CitiesType, CityType, TypesPageEnum } from '../../types/types';

type LocationsProps = {
  locations: CitiesType;
  typesPage: TypesPageEnum;
};

type LocationItemProps = {
  location: CityType;
  typesPage: TypesPageEnum;
  isActive: boolean;
};

function LocationsItem(props: LocationItemProps): JSX.Element {
  const { location, isActive, typesPage } = props;
  return (
    <li className="locations__item">
      <LocationsItemLink
        location={location}
        typesPage={typesPage}
        isActive={isActive}
      />
    </li>
  );
}

function LocationsList({ locations, typesPage }: LocationsProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <LocationsItem
          key={nanoid()}
          typesPage={typesPage}
          location={location}
          isActive={location === DEFAULT_ACTIVE_LOCATION}
        />
      ))}
    </ul>
  );
}

export default LocationsList;
