import { OfferType } from '../../types/offer';
import { State } from '../../types/state';

const selectIsExtendedOfferLoading = (state: State): boolean =>
  state.isExtendedOfferLoading;

const selectExtendedOffer = (state: State): OfferType | null =>
  state.extendedOffer;

export { selectIsExtendedOfferLoading, selectExtendedOffer };
