import { OfferType } from '../../types/offer';
import { ShortOfferType } from '../../types/offers';

function adaptResponceToFavorite(
  offer: OfferType & { previewImage: string },
  ...fieldsToRemove: Array<keyof OfferType>
): ShortOfferType {
  const newOffer = { ...offer };

  for (const field of fieldsToRemove) {
    delete newOffer[field];
  }

  return newOffer;
}

export { adaptResponceToFavorite };
