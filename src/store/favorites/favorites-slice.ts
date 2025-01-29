import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesState } from '../../types/favorites';
import { changeFavoriteStatus, uploadFavorites } from '../api-actions';
import { adaptResponceToFavorite } from './utils';
import { OfferType } from '../../types/offer';

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
        const favoriteOffer = adaptResponceToFavorite(
          action.payload as OfferType & { previewImage: string },
          'description',
          'images',
          'goods',
          'host',
          'bedrooms',
          'maxAdults'
        );

        state.isChangingStaus = false;
        if (favoriteOffer.isFavorite) {
          state.favorites.push(favoriteOffer);
        } else {
          state.favorites = state.favorites.filter(
            (offer) => offer.id !== favoriteOffer.id
          );
        }
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.isChangingStaus = false;
      });
  },
});

export { favoritesSlice };
