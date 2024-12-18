import { TypesSort } from '../../const';
import { ShortOfferListType, SortTypeKeys } from '../../types/types';

const sortOffers = (
  offers: ShortOfferListType,
  key: SortTypeKeys
): ShortOfferListType => {
  switch (TypesSort[key]) {
    case TypesSort.HighToLow:
      return [...offers].sort((prev, next) => next.price - prev.price);
    case TypesSort.LowToHigh:
      return [...offers].sort((prev, next) => prev.price - next.price);
    case TypesSort.Rating:
      return [...offers].sort((prev, next) => next.rating - prev.rating);
  }
  return offers;
};

export { sortOffers };
