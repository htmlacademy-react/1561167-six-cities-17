import { memo } from 'react';
import { CITIES } from '../../../../const';
import { LocationsItem } from '../locations-item/locations-item';
import { TypesPageKeys } from '../../../../types/types';

type LocationsListProps = {
  typesPage: TypesPageKeys;
};

const LocationsList = memo(
  ({ typesPage }: LocationsListProps): JSX.Element => (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationsItem key={city} city={city} typesPage={typesPage} />
      ))}
    </ul>
  )
);

LocationsList.displayName = 'LocationsList';

export { LocationsList };
