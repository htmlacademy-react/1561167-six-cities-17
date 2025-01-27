import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { AuthorizationStatusKeys } from '../../types/user';

const selectAuthorizationStatus = (state: State): AuthorizationStatusKeys =>
  state[NameSpace.User].authorizationStatus;

const selectUserEmail = (state: State): string | undefined =>
  state[NameSpace.User].userInfo?.email;

const selectUserAvatarUrl = (state: State): string | undefined =>
  state[NameSpace.User].userInfo?.avatarUrl;

const selectAuthRequestExecuted = (state: State): boolean =>
  state[NameSpace.User].isAuthRequestExecuted;

export {
  selectAuthorizationStatus,
  selectUserEmail,
  selectUserAvatarUrl,
  selectAuthRequestExecuted,
};
