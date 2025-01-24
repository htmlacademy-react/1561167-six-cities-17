import { ShortOfferListType } from '../../types/offers';

function adaptToFavorites(offers: ShortOfferListType) {
  return offers.map((offer) => offer.id);
}

export { adaptToFavorites };
