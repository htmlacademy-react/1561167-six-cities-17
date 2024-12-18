import { FavoritesItem } from '../favorites-item/favorites-item';
import {
  CityKeys,
  CurrentCityChangeType,
  GroupedOffersType,
  TypesPageKeys,
} from '../../../../types/types';

type FavoritesListProps = {
  typesPage: TypesPageKeys;
  groupedOffers: GroupedOffersType;
  onCurrentCityChange: CurrentCityChangeType;
};

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { groupedOffers, typesPage, onCurrentCityChange } = props;
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((key) => (
        <FavoritesItem
          key={key as CityKeys}
          city={key as CityKeys}
          onCurrentCityChange={onCurrentCityChange}
          offers={groupedOffers[key]}
          typesPage={typesPage}
        />
      ))}
    </ul>
  );
}

export { FavoritesList };
