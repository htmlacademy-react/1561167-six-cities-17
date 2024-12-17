import { CityKeys, ShortOfferListType } from '../../types/types';

const filterOffersByCity = (
  offers: ShortOfferListType,
  city: CityKeys
): ShortOfferListType => offers.filter((offer) => offer.city.name === city);

export { filterOffersByCity };
