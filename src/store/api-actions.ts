import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, ERROR_SHOW_TIMEOUT } from '../const';
import { ShortOfferListType } from '../types/types';
import { AuthorizationData, UserData } from '../types/user';
import { dropToken, setToken } from '../services/token';
import { setError } from './actions';
import { store } from '.';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

const uploadOffers = createAppAsyncThunk<ShortOfferListType, undefined>(
  'offers/uploadOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ShortOfferListType>(APIRoute.Offers);
    return data;
  }
);

const checkAuthorizationStatus = createAppAsyncThunk<void, undefined>(
  'user/checkAuthorizationStatus',
  async (_arg, { extra: api }) => await api.get(APIRoute.Login)
);

const logIn = createAppAsyncThunk<void, AuthorizationData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    setToken(token);
  }
);

const logOut = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

const clearError = createAppAsyncThunk<void, undefined>(
  'app / clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), ERROR_SHOW_TIMEOUT);
  }
);

export { uploadOffers, checkAuthorizationStatus, logIn, logOut, clearError };
