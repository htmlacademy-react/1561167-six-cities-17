import { CITIES } from '../../const';
import { CityType, TypesPageEnum } from '../../types/types';
import { LocationsItem } from '../locations-item/locations-item';

type LocationsListProps = {
  currentCity: CityType;
  onCurrentCityChange: (citi: CityType) => void;
  typesPage: TypesPageEnum;
};

function LocationsList(props: LocationsListProps): JSX.Element {
  const { currentCity, onCurrentCityChange, typesPage } = props;
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationsItem
          key={city}
          city={city}
          currentCity={currentCity}
          onCurrentCityChange={onCurrentCityChange}
          typesPage={typesPage}
        />
      ))}
    </ul>
  );
}

export { LocationsList };
