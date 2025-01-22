import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { ReviewsListType } from '../types/review';
import { NEARBY_OFFERS_LIMITED } from '../const';
import { OfferType, ShortOfferListType } from '../types/offers';

const selectIsExtendedOfferLoading = (state: State): boolean =>
  state.isExtendedOfferLoading;

const selectExtendedOffer = (state: State): OfferType | null =>
  state.extendedOffer;

const selectIsNearbyOffersLoading = (state: State): boolean =>
  state.isNearbyOffersLoading;

const selectNearbyOffers = (state: State): ShortOfferListType =>
  state.nearbyOffers;

const selectAdaptToNearbyOffers = createSelector(
  [selectNearbyOffers],
  (offers) => offers.slice(0, NEARBY_OFFERS_LIMITED)
);

const selectIsReviewsListLoading = (state: State): boolean =>
  state.isReviewsListLoading;

const selectReviewsList = (state: State): ReviewsListType => state.reviewsList;

const selectisSubmitReviewLoading = (state: State): boolean =>
  state.isSubmitReviewLoading;

const selectErrorMessage = (state: State): string | null => state.error;

export {
  selectExtendedOffer,
  selectIsExtendedOfferLoading,
  selectIsNearbyOffersLoading,
  selectIsReviewsListLoading,
  selectReviewsList,
  selectisSubmitReviewLoading,
  selectAdaptToNearbyOffers,
  selectErrorMessage,
};
