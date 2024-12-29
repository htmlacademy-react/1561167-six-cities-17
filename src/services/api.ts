import axios, { AxiosInstance } from 'axios';
import { Server } from '../const';
import { getToken } from './token';

const createAPI = (): AxiosInstance => {
  const api = axios.create({ baseURL: Server.Url, timeout: Server.Timeout });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};

export { createAPI };
