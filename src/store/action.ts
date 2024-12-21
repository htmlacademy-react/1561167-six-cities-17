import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ShortOfferListType } from '../types/types';

const cityChange = createAction<CityKeys>('page/cityChange');

const createShortOffers = createAction<ShortOfferListType>(
  'data/createShortOffers'
);

export { cityChange, createShortOffers };
