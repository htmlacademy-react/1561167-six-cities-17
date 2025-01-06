import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { ShortOfferListType } from '../types/types';
import { AuthorizationData, UserInfo } from '../types/user';
import { dropToken, setToken } from '../services/token';

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

const logIn = createAppAsyncThunk<UserInfo, AuthorizationData>(
  'user/logIn',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserInfo>(APIRoute.Login, {
      email,
      password,
    });
    setToken(data.token);
    return data;
  }
);

const logOut = createAppAsyncThunk<void, undefined>(
  'user/logOut',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { uploadOffers, checkAuthorizationStatus, logIn, logOut };
