import { FavoritesItem } from '../favorites-item/favorites-item';
import { GroupedOffersType } from '../../../../types/favorites';
import { CityKeys } from '../../../../types/cities';

type FavoritesListProps = {
  groupedOffers: GroupedOffersType;
};

function FavoritesList({ groupedOffers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(groupedOffers).map((key) => (
        <FavoritesItem
          key={key as CityKeys}
          city={key as CityKeys}
          offers={groupedOffers[key]}
        />
      ))}
    </ul>
  );
}

export { FavoritesList };
