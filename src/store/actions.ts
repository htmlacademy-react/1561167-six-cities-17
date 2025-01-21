import { createAction } from '@reduxjs/toolkit';
import { SortTypeKeys } from '../types/types';
import { CityKeys } from '../types/cities';

const changeCity = createAction<CityKeys>('location/changeCity');

const changeSortKey = createAction<SortTypeKeys>('sort/changeSortKey');

const setError = createAction<string | null>('error/setError');

export { changeCity, changeSortKey, setError };
