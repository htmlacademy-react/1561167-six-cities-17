import { OfferListType, OfferType } from '../../types/types';

const getOfferById = (
  offers: OfferListType,
  id: string | null
): OfferType | undefined => {
  if (id === null) {
    return;
  }

  return offers.find((offer) => offer.id === id);
};

export { getOfferById };
