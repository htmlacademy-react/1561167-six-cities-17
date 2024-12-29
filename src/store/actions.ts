import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';
import { AuthorizationStatusKeys } from '../types/user';

const changeCity = createAction<CityKeys>('location/changeCity');

const getOffers = createAction<ShortOfferListType>('offer/getOffers');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

const setAuthorizationStatus = createAction<AuthorizationStatusKeys>(
  'user/setAuthorizationStatus'
);

export { changeCity, getOffers, changeSortKey, setAuthorizationStatus };
