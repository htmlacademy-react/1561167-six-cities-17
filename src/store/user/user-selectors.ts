import { State } from '../../types/state';
import { AuthorizationStatusKeys } from '../../types/user';

const selectAuthorizationStatus = (state: State): AuthorizationStatusKeys =>
  state.authorizationStatus;

const selectUserEmail = (state: State): string | undefined =>
  state.userInfo?.email;

const selectUserAvatarUrl = (state: State): string | undefined =>
  state.userInfo?.avatarUrl;

export { selectAuthorizationStatus, selectUserEmail, selectUserAvatarUrl };
