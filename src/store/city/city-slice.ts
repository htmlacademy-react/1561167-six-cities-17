import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CURRENT_CITY, NameSpace } from '../../const';
import { CityKeys, CityState } from '../../types/cities';

const initialState: CityState = {
  currentCity: DEFAULT_CURRENT_CITY,
};

const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityKeys>) {
      state.currentCity = action.payload;
    },
  },
});

export { citySlice };

export const { changeCity } = citySlice.actions;
