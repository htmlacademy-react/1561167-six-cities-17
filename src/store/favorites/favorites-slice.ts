import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesState } from '../../types/favorites';
import { uploadFavorites } from '../api-actions';
import { adaptToFavorites } from './utils';

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
        state.favorites = adaptToFavorites(action.payload);
        state.isFavoritesLoading = false;
      })
      .addCase(uploadFavorites.rejected, (state) => {
        state.favorites = [];
        state.isFavoritesLoading = false;
      });
  },
});

export { favoritesSlice };
