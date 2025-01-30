import { ShortOfferListType } from '../../types/offers';

const getIndexOfferById = (
  offers: ShortOfferListType,
  offerId: string
): number => offers.findIndex(({ id }) => id === offerId);

export { getIndexOfferById };
