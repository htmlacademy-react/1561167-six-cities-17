import { FavoritesItem } from '../favorites-item/favorites-item';
import {
  CityKeys,
  GroupedOffersType,
  TypesPageKeys,
} from '../../../../types/types';

type FavoritesListProps = {
  typesPage: TypesPageKeys;
  groupedOffers: GroupedOffersType;
};

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { groupedOffers, typesPage } = props;
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((key) => (
        <FavoritesItem
          key={key as CityKeys}
          city={key as CityKeys}
          offers={groupedOffers[key]}
          typesPage={typesPage}
        />
      ))}
    </ul>
  );
}

export { FavoritesList };
