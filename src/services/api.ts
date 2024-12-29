import axios, { AxiosInstance } from 'axios';
import { Server } from '../const';

const createAPI = (): AxiosInstance =>
  axios.create({ baseURL: Server.Url, timeout: Server.Timeout });

export { createAPI };
