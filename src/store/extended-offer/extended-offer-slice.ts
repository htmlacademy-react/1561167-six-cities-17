import { createSlice} from '@reduxjs/toolkit';
import { uploadExtendedOffer } from '../api-actions';
import { NameSpace } from '../../const';
import { OfferState } from '../../types/offer';

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

export const { clearExtendedOffer } = extendedOfferSlice.actions;
