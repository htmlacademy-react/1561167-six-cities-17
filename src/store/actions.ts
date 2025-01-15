import { createAction } from '@reduxjs/toolkit';
import { SortTypeKeys } from '../types/types';
import { CityKeys } from '../types/cities';
import { ShortOfferListType } from '../types/offers';

const changeCity = createAction<CityKeys>('location/changeCity');

const setOffers = createAction<ShortOfferListType>('offers/setOffers');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

export { changeCity, setOffers, changeSortKey };
