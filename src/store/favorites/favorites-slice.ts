import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesState } from '../../types/favorites';
import { changeFavoriteStatus, uploadFavorites } from '../api-actions';
import { adaptToFavorites } from './utils';

const initialState: FavoritesState = {
  favorites: [],
  isFavoritesLoading: false,
  isChangingStaus: false,
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    removeOfferFromFavoritesById(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadFavorites.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(uploadFavorites.fulfilled, (state, action) => {
        state.favorites = adaptToFavorites(action.payload);
        state.isFavoritesLoading = false;
      })
      .addCase(uploadFavorites.rejected, (state) => {
        state.favorites = [];
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.isChangingStaus = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.favorites = state.favorites.concat(action.payload.id);
        state.isChangingStaus = false;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.isChangingStaus = false;
      });
  },
});

export { favoritesSlice };

export const { removeOfferFromFavoritesById } = favoritesSlice.actions;
