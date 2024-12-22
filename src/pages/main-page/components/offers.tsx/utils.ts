import { TypesSort } from '../../../../const';
import { ShortOfferListType, SortTypeKeys } from '../../../../types/types';

const sortBy = {
  [TypesSort.Popular]: (offers: ShortOfferListType) => [...offers],
  [TypesSort.HighToLow]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => next.price - prev.price),
  [TypesSort.LowToHigh]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => prev.price - next.price),
  [TypesSort.Rating]: (offers: ShortOfferListType) =>
    [...offers].sort((prev, next) => next.rating - prev.rating),
};

const sortOffers = (offers: ShortOfferListType, key: SortTypeKeys) =>
  sortBy[TypesSort[key]](offers);

export { sortOffers };
