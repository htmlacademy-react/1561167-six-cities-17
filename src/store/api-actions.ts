import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { dropToken, setToken } from '../services/token';
import { APIRoute, NameSpace } from '../const';
import { AuthorizationData, UserInfo } from '../types/user';
import { OfferReviewType, ReviewsListType, ReviewType } from '../types/review';
import { ShortOfferListType } from '../types/offers';
import { AppDispatch, State } from '../types/state';
import { OfferType } from '../types/offer';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

const uploadOffers = createAppAsyncThunk<ShortOfferListType, undefined>(
  `${NameSpace.Offers}/uploadOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ShortOfferListType>(APIRoute.Offers);
    return data;
  }
);

const uploadExtendedOffer = createAppAsyncThunk<OfferType, string | undefined>(
  `${NameSpace.ExtendedOffer}/uploadExtendedOffer`,
  async (id, { extra: api }) => {
    const path = generatePath(APIRoute.ExtendedOffer, { offerId: id });
    const { data } = await api.get<OfferType>(path);
    return data;
  }
);

const uploadNearbyOffers = createAppAsyncThunk<
  ShortOfferListType,
  string | undefined
>(`${NameSpace.Offers}/uploadNearbyOffers`, async (id, { extra: api }) => {
  const path = generatePath(APIRoute.NearbyOffers, { offerId: id });
  const { data } = await api.get<ShortOfferListType>(path);
  return data;
});

const uploadReviewsList = createAppAsyncThunk<
  ReviewsListType,
  string | undefined
>(`${NameSpace.Reviews}/uploadReviewsList`, async (id, { extra: api }) => {
  const path = generatePath(APIRoute.Comments, { offerId: id });
  const { data } = await api.get<ReviewsListType>(path);
  return data;
});

const submitReview = createAppAsyncThunk<ReviewType, OfferReviewType>(
  `${NameSpace.Reviews}/submitReview`,
  async ({ offerId, review: { rating, comment } }, { extra: api }) => {
    const path = generatePath(APIRoute.Comments, { offerId });
    const { data } = await api.post<ReviewType>(path, {
      rating,
      comment,
    });
    return data;
  }
);

const checkAuthorizationStatus = createAppAsyncThunk<UserInfo, undefined>(
  `${NameSpace.User}/checkAuthorizationStatus`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
);

const logIn = createAppAsyncThunk<UserInfo, AuthorizationData>(
  `${NameSpace.User}/logIn`,
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
  `${NameSpace.User}/logOut`,
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
  uploadNearbyOffers,
  uploadReviewsList,
  submitReview,
};
