import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesState } from '../../types/favorites';
import { changeFavoriteStatus, uploadFavorites } from '../api-actions';

const initialState: FavoritesState = {
  favorites: [],
  isFavoritesLoading: false,
  isChangingStaus: false,
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadFavorites.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(uploadFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
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
        state.isChangingStaus = false;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(
            (offer) => offer.id !== action.payload.id
          );
        }
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.isChangingStaus = false;
      });
  },
});

export { favoritesSlice };
