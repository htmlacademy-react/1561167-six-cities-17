import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { OfferType, ReviewListType, ShortOfferListType } from '../types/types';
import { AuthorizationData, UserInfo } from '../types/user';
import { dropToken, setToken } from '../services/token';
import { generatePath } from 'react-router-dom';

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

const uploadExtendedOffer = createAppAsyncThunk<OfferType, string | undefined>(
  'offers/uploadExtendedOffer',
  async (id, { extra: api }) => {
    const path = generatePath(APIRoute.ExtendedOffer, { offerId: id });
    const { data } = await api.get<OfferType>(path);
    return data;
  }
);

const uploadNearbyOffers = createAppAsyncThunk<
  ShortOfferListType,
  string | undefined
>('offers/uploadNearbyOffers', async (id, { extra: api }) => {
  const path = generatePath(APIRoute.NearbyOffers, { offerId: id });
  const { data } = await api.get<ShortOfferListType>(path);
  return data;
});

const uploadReviewsList = createAppAsyncThunk<
  ReviewListType,
  string | undefined
>('offers/uploadReviewsList', async (id, { extra: api }) => {
  const path = generatePath(APIRoute.Comments, { offerId: id });
  const { data } = await api.get<ReviewListType>(path);
  return data;
});

const checkAuthorizationStatus = createAppAsyncThunk<UserInfo, undefined>(
  'user/checkAuthorizationStatus',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
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

export {
  uploadOffers,
  checkAuthorizationStatus,
  logIn,
  logOut,
  uploadExtendedOffer,
  uploadNearbyOffers,uploadReviewsList,
};
