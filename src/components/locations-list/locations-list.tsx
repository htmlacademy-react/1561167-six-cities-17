import { nanoid } from 'nanoid';
import LocationsItemLink from '../locations-item-link/locations-item-link';
import { DEFAULT_ACTIVE_LOCATION } from '../../const';
import { CitiesType, LocationProps, TypesPageEnum } from '../../types/types';

type LocationsListProps = {
  locations: CitiesType;
  typesPage: TypesPageEnum;
};

function LocationsItem(props: LocationProps): JSX.Element {
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

function LocationsList({
  locations,
  typesPage,
}: LocationsListProps): JSX.Element {
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
