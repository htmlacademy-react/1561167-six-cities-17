import { FavoritesListType, GroupedOffersType } from '../../types/favorites';
import { ShortOfferListType } from '../../types/offers';

const groupByList = (offers: ShortOfferListType) =>
  offers.reduce((accumulator: GroupedOffersType, offer) => {
    const cityName = offer.city.name;
    accumulator[cityName] = accumulator[cityName] || [];
    accumulator[cityName].push(offer);
    return accumulator;
  }, {} as GroupedOffersType);

const extractFavoriteOffers = (
  offers: ShortOfferListType,
  favorites: FavoritesListType
): ShortOfferListType => offers.filter(({ id }) => favorites.includes(id));

export { groupByList, extractFavoriteOffers };
