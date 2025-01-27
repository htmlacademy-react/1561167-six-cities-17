import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { User } from '../../types/user';
import { checkAuthorizationStatus, logIn, logOut } from '../api-actions';

const initialState: User = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isAuthRequestExecuted: false,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationStatus.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorizationStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.pending, (state) => {
        state.isAuthRequestExecuted = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthRequestExecuted = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.userInfo = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthRequestExecuted = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.userInfo = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOut.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});

export { userSlice };
