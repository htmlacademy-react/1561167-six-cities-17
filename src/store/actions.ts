import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';

const changeCity = createAction<CityKeys>('location/changeCity');

const getOffers = createAction<ShortOfferListType>('offer/getOffers');

const changeSortKey = createAction<SortTypeKeys>('page/changeSortKey');

export { changeCity, getOffers, changeSortKey };
