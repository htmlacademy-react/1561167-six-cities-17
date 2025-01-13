import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { Server } from '../const';
import { getToken } from './token';
import { notify } from '../utils/utils';

type DetailMessageType = {
  type: string;
  message: string;
};

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true,
};

const isShowError = (response: AxiosResponse) =>
  StatusCodeMapping[response.status];

const createAPI = (): AxiosInstance => {
  const api = axios.create({ baseURL: Server.Url, timeout: Server.Timeout });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && isShowError(error.response)) {
        const detailMessage = error.response.data;
        notify(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};

export { createAPI };
