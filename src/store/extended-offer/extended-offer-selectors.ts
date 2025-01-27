import { NameSpace } from '../../const';
import { OfferType } from '../../types/offer';
import { State } from '../../types/state';

const selectIsExtendedOfferLoading = (state: State): boolean =>
  state[NameSpace.ExtendedOffer].isExtendedOfferLoading;

const selectExtendedOffer = (state: State): OfferType | null =>
  state[NameSpace.ExtendedOffer].extendedOffer;

export { selectIsExtendedOfferLoading, selectExtendedOffer };
