import { AuthorizationStatus } from '../const';

export type AuthorizationStatusKeys = keyof typeof AuthorizationStatus;

export type AuthorizationData = {
  login: string;
  password: string;
};

export type UserInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};
