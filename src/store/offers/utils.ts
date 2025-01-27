import { ShortOfferListType } from '../../types/offers';

const getOfferIndexById = (
  offers: ShortOfferListType,
  offerId: string
): number => offers.findIndex((offer) => offer.id === offerId);

export { getOfferIndexById };
