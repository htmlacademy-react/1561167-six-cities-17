import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersState, OfferUpdate } from '../../types/offers';
import { NameSpace } from '../../const';
import { uploadNearbyOffers, uploadOffers } from '../api-actions';
import { getIndexOfferById } from './utils';

const initialState: OffersState = {
  offers: [],
  isOffersLoading: false,
  nearbyOffers: [],
  isNearbyOffersLoading: false,
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    clearNearbyOffers(state) {
      state.nearbyOffers = [];
      state.isNearbyOffersLoading = false;
    },
    updateOfferStatus(state, action: PayloadAction<OfferUpdate>) {
      const indexUpdateOffer = getIndexOfferById(
        state.offers,
        action.payload.id
      );

      if (indexUpdateOffer !== -1) {
        state.offers[indexUpdateOffer].isFavorite = action.payload.isFavorite;
      }
    },
    updateNearbyOfferStatus(state, action: PayloadAction<OfferUpdate>) {
      const indexUpdateOffer = getIndexOfferById(
        state.nearbyOffers,
        action.payload.id
      );

      if (indexUpdateOffer !== -1) {
        state.nearbyOffers[indexUpdateOffer].isFavorite =
          action.payload.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(uploadOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(uploadOffers.rejected, (state) => {
        state.offers = [];
        state.isOffersLoading = false;
      })
      .addCase(uploadNearbyOffers.pending, (state) => {
        state.isNearbyOffersLoading = true;
      })
      .addCase(uploadNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(uploadNearbyOffers.rejected, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersLoading = false;
      });
  },
});

export { offersSlice };

export const { clearNearbyOffers, updateOfferStatus, updateNearbyOfferStatus } =
  offersSlice.actions;
