import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uploadExtendedOffer } from '../api-actions';
import { NameSpace } from '../../const';
import { OfferState } from '../../types/offer';
import { OfferUpdate } from '../../types/offers';

const initialState: OfferState = {
  extendedOffer: null,
  isExtendedOfferLoading: false,
};

const extendedOfferSlice = createSlice({
  name: NameSpace.ExtendedOffer,
  initialState,
  reducers: {
    clearExtendedOffer(state) {
      state.extendedOffer = null;
      state.isExtendedOfferLoading = false;
    },
    updateExtendedOfferStatus(state, action: PayloadAction<OfferUpdate>) {
      if (state.extendedOffer && state.extendedOffer.id === action.payload.id) {
        state.extendedOffer.isFavorite = action.payload.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadExtendedOffer.pending, (state) => {
        state.isExtendedOfferLoading = true;
      })
      .addCase(uploadExtendedOffer.fulfilled, (state, action) => {
        state.extendedOffer = action.payload;
        state.isExtendedOfferLoading = false;
      })
      .addCase(uploadExtendedOffer.rejected, (state) => {
        state.extendedOffer = null;
        state.isExtendedOfferLoading = false;
      });
  },
});

export { extendedOfferSlice };

export const { clearExtendedOffer, updateExtendedOfferStatus } =
  extendedOfferSlice.actions;
