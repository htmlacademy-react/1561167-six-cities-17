import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';

const changeCity = createAction<CityKeys>('location/changeCity');

const setOffers = createAction<ShortOfferListType>('offers/setOffers');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

export {
  changeCity,
  setOffers,
  changeSortKey,
};
