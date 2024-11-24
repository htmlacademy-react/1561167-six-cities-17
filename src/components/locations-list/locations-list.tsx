import { nanoid } from 'nanoid';
import LocationsItem from '../locations-item/locations-item';
import { DEFAULT_ACTIVE_LOCATION } from '../../const';

type LocationsProps = {
  locations: string[];
};

function LocationsList({ locations }: LocationsProps): JSX.Element {
  const items = Array.from({ length: locations.length }, (_, i) => (
    <LocationsItem
      key={nanoid()}
      className="locations__item-link tabs__item"
      location={locations[i]}
      isLocationActive={locations[i] === DEFAULT_ACTIVE_LOCATION}
    />
  ));
  return <ul className="locations__list tabs__list">{items}</ul>;
}

export default LocationsList;
