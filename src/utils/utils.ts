import {
  CityKeys,
  MapPointsListType,
  OfferType,
  ShortOfferListType,
} from '../types/types';

const adaptToMap = (
  shortOffers: ShortOfferListType,
  offer?: OfferType
): MapPointsListType => {
  const points = shortOffers.map(({ id, city, location }) => ({
    id,
    city,
    location,
  }));

  if (offer !== undefined) {
    return points.concat({
      id: offer.id,
      city: offer.city,
      location: offer.location,
    });
  }

  return points;
};

const filterOffersByCity = (
  offers: ShortOfferListType,
  city: CityKeys
): ShortOfferListType => offers.filter((offer) => offer.city.name === city);

export { adaptToMap,filterOffersByCity };
