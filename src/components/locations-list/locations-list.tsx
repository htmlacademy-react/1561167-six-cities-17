import { nanoid } from 'nanoid';
import LocationsItem from '../locations_item/locations_item';

type LocationsProps = {
  locations: string[];
};

function LocationsList({ locations }: LocationsProps): JSX.Element {
  const items = Array.from({ length: locations.length }, (_, i) => (
    <LocationsItem
      key={nanoid()}
      location={locations[i]}
      isLocationActive={i === 0}
    />
  ));
  return <ul className="locations__list tabs__list">{items}</ul>;
}

export default LocationsList;
