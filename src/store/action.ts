import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType, SortTypeKeys } from '../types/types';

const cityChange = createAction<CityKeys>('page/cityChange');

const createShortOffers = createAction<ShortOfferListType>(
  'data/createShortOffers'
);

const currentSortKeyChange = createAction<SortTypeKeys>('page/currentSortKeyChange');

export { cityChange, createShortOffers, currentSortKeyChange };
