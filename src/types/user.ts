import { AuthorizationStatus } from '../const';

export type AuthorizationStatusKeys = keyof typeof AuthorizationStatus;

export type AuthorizationData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};
