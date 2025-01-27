import { AuthorizationStatus } from '../const';
import { HostType } from './offer';
import { InitialState } from './state';

type AuthorizationStatusKeys = keyof typeof AuthorizationStatus;

type AuthorizationData = {
  login: string;
  password: string;
};

type UserInfo = HostType & {
  email: string;
  token: string;
};

type User = Pick<
  InitialState,
  'authorizationStatus' | 'userInfo' | 'isAuthRequestExecuted'
>;

export type { AuthorizationStatusKeys, AuthorizationData, UserInfo, User };
