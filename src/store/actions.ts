import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';
import { AuthorizationStatusKeys } from '../types/user';

const changeCity = createAction<CityKeys>('location/changeCity');

const setOffers = createAction<ShortOfferListType>('offers/setOffers');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

const setAuthorizationStatus = createAction<AuthorizationStatusKeys>(
  'user/setAuthorizationStatus'
);


const setOffersLoadingStatus = createAction<boolean>(
  'offers/setOffersLoadingStatus'
);

export {
  changeCity,
  setOffers,
  changeSortKey,
  setAuthorizationStatus,
  setOffersLoadingStatus
};
