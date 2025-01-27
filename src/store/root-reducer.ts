import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user-slice';
import { offersSlice } from './offers/offers-slice';
import { citySlice } from './city/city-slice';
import { sortKeySlice } from './sort-key/sort-key-slice';
import { extendedOfferSlice } from './extended-offer/extended-offer-slice';
import { reviewsSlice } from './reviews/reviews-slice';
import { errorSlice } from './error/error-slice';
import { NameSpace } from '../const';
import { favoritesSlice } from './favorites/favorites-slice';
import { pageSlice } from './page/page-slice';

const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.SortKey]: sortKeySlice.reducer,
  [NameSpace.ExtendedOffer]: extendedOfferSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Error]: errorSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
  [NameSpace.Page]: pageSlice.reducer,
});

export { rootReducer };
