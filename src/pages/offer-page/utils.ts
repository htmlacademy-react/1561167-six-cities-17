import { OfferListType, OfferType } from '../../types/types';

const getOfferById = (
  offers: OfferListType,
  id: string | undefined
): OfferType | undefined => {
  if (id === undefined) {
    return;
  }

  return offers.find((offer) => offer.id === id);
};

export { getOfferById };
