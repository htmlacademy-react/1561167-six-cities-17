import { toast } from 'react-toastify';
import { TypesSort } from '../const';
import {
  CityKeys,
  MapPointsListType,
  OfferType,
  ShortOfferListType,
  SortTypeKeys,
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

const sortBy = {
  [TypesSort.Popular]: (offers: ShortOfferListType) => [...offers],
  [TypesSort.HighToLow]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => next.price - prev.price),
  [TypesSort.LowToHigh]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => prev.price - next.price),
  [TypesSort.Rating]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => next.rating - prev.rating),
};

const sortOffers = (
  offers: ShortOfferListType,
  key: SortTypeKeys
): ShortOfferListType => sortBy[TypesSort[key]](offers);

const notify = (message: string) => toast.warn(message);

export { adaptToMap, filterOffersByCity, sortOffers, notify };
