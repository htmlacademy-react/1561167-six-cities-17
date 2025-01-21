import { AuthorizationStatus } from '../const';
import { HostType } from './offers';

type AuthorizationStatusKeys = keyof typeof AuthorizationStatus;

type AuthorizationData = {
  login: string;
  password: string;
};

type UserInfo = HostType & {
  email: string;
  token: string;
};

export type { AuthorizationStatusKeys, AuthorizationData, UserInfo };
