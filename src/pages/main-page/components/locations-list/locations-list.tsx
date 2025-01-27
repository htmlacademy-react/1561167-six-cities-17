import { memo } from 'react';
import { CITIES } from '../../../../const';
import { LocationsItem } from '../locations-item/locations-item';
import { useAppSelector } from '../../../../hooks';
import { selectCurrentCity } from '../../../../store/city/city-selectors';

const LocationsList = memo((): JSX.Element => {
  const currentCity = useAppSelector(selectCurrentCity);
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationsItem key={city} city={city} currentCity={currentCity} />
      ))}
    </ul>
  );
});

LocationsList.displayName = 'LocationsList';

export { LocationsList };
