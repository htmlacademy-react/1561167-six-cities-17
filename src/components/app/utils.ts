import { CityType, ShortOfferListType } from '../../types/types';

const getFilteredOffersForCity = (
  offers: ShortOfferListType,
  city: CityType
): ShortOfferListType =>
  offers.filter((offer) => offer.city.name === city);

export { getFilteredOffersForCity };
