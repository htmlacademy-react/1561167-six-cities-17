import { createSlice } from '@reduxjs/toolkit';
import { OffersState } from '../../types/offers';
import { NameSpace } from '../../const';
import { uploadNearbyOffers, uploadOffers } from '../api-actions';
import { getOfferIndexById } from './utils';

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
    setFavoritesStatus(state, action) {
      const indexOffer = getOfferIndexById(
        state.offers,
        action.payload as string
      );
      if (indexOffer !== -1) {
        state.offers[indexOffer].isFavorite = true;
      }
    },
    removeFavoritesStatus(state, action) {
      const indexOffer = getOfferIndexById(
        state.offers,
        action.payload as string
      );
      if (indexOffer !== -1) {
        state.offers[indexOffer].isFavorite = false;
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

export const { clearNearbyOffers, setFavoritesStatus, removeFavoritesStatus } =
  offersSlice.actions;
