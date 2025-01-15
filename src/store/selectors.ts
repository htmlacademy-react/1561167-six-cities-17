import { createSelector } from '@reduxjs/toolkit';
import { filterOffersByCity, sortOffers } from '../utils/utils';
import { State } from '../types/state';
import { SortTypeKeys } from '../types/types';
import { AuthorizationStatusKeys } from '../types/user';
import { ReviewsListType } from '../types/review';
import { NEARBY_OFFERS_LIMITED } from '../const';
import { OfferType, ShortOfferListType } from '../types/offers';
import { CityKeys } from '../types/cities';

const selectOffers = (state: State): ShortOfferListType => state.offers;

const selectCurrentCity = (state: State): CityKeys => state.currentCity;

const selectCurrentSortKey = (state: State): SortTypeKeys =>
  state.currentSortKey;

const selectFilteredOffers = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCity) => filterOffersByCity(offers, currentCity)
);

const selectSortedOffers = createSelector(
  [selectFilteredOffers, selectCurrentSortKey],
  (offers, currentSortKey) => sortOffers(offers, currentSortKey)
);

const selectAuthorizationStatus = (state: State): AuthorizationStatusKeys =>
  state.authorizationStatus;

const selectIsOffersLoading = (state: State): boolean => state.isOffersLoading;

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

const selectUserEmail = (state: State): string | undefined =>
  state.userInfo?.email;

const selectUserAvatarUrl = (state: State): string | undefined =>
  state.userInfo?.avatarUrl;

export {
  selectOffers,
  selectCurrentCity,
  selectCurrentSortKey,
  selectFilteredOffers,
  selectSortedOffers,
  selectAuthorizationStatus,
  selectIsOffersLoading,
  selectExtendedOffer,
  selectUserEmail,
  selectIsExtendedOfferLoading,
  selectIsNearbyOffersLoading,
  selectIsReviewsListLoading,
  selectReviewsList,
  selectisSubmitReviewLoading,
  selectUserAvatarUrl,
  selectAdaptToNearbyOffers,
};
