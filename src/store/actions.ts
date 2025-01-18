import { createAction } from '@reduxjs/toolkit';
import { SortTypeKeys } from '../types/types';
import { CityKeys } from '../types/cities';

const changeCity = createAction<CityKeys>('location/changeCity');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

const setNetworkError = createAction<string>('app/setNetworkError');

export { changeCity, changeSortKey, setNetworkError };
