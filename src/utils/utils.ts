import { Id, toast } from 'react-toastify';
import { TypesSort } from '../const';
import { MapPointsListType } from '../types/map';
import { ShortOfferListType } from '../types/offers';
import { CityKeys } from '../types/cities';
import { OfferType } from '../types/offer';
import { SortTypeKeys } from '../types/sort';

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

const notify = (message: string): Id => toast.warn(message);

const toWordCapitalLetter = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

const toCapitalizeSentence = (sentence: string): string => {
  if (!sentence || !sentence.length) {
    return '';
  }
  const words = sentence.split(' ');
  const capitalizedWords = words.map((word) => toWordCapitalLetter(word));
  return capitalizedWords.join(' ');
};

const getPluralNoun = (noun: string, count: number): string =>
  count > 1 ? `${noun}s` : noun;

export {
  adaptToMap,
  filterOffersByCity,
  sortOffers,
  notify,
  toCapitalizeSentence,
  getPluralNoun,
  toWordCapitalLetter,
};
