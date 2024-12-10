import { FavoritesItem } from '../favorites-item/favorites-item';
import {
  CityType,
  CurrentCityChangeType,
  GroupedOffersType,
  TypesPageEnum,
} from '../../../../types/types';

type FavoritesListProps = {
  typesPage: TypesPageEnum;
  groupedOffers: GroupedOffersType;
  onCurrentCityChange: CurrentCityChangeType;
};

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { groupedOffers, typesPage, onCurrentCityChange } = props;
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((key) => (
        <FavoritesItem
          key={key as CityType}
          city={key as CityType}
          onCurrentCityChange={onCurrentCityChange}
          offers={groupedOffers[key]}
          typesPage={typesPage}
        />
      ))}
    </ul>
  );
}

export { FavoritesList };
