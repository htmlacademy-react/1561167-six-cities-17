import { FavoritesListType } from '../../types/favorites';
import { ShortOfferListType } from '../../types/offers';

function adaptToFavorites(offers: ShortOfferListType):FavoritesListType {
  return offers.map((offer) => offer.id);
}

export { adaptToFavorites };
