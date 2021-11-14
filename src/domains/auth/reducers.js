import { createReducer } from '@reduxjs/toolkit';
import initialState from './initialState';

import * as authTypes from './types';

const authSuccess = (state, action) => ({
  ...state,
  ...{
    token: action.token,
    error: null,
    isAuth: true,
  },
});

const authUpdateProfile = (state, action) => ({
  ...state,
  ...{
    profile: action.profile,
    role: action.profile.role,
  },
});

const authLogout = (state) => ({
  ...state,
  ...{
    token: null,
    id: null,
    isAuth: false,
    role: null,
  },
});

const userUpdateProfile = (state, action) => ({
  ...state,
  ...{
    profile: action.profile,
  },
});

const authLoginSuccess = (state, action) => ({
  ...state,
  ...{
    token: action.payload.token,
    expirationDate: action.payload.expirationDate,
    userId: action.payload.profile.id,
    isAuth: true,
    role: action.payload.profile.userRole,
    email: action.payload.profile.email,
    photo: action.payload.profile.photo,
    languageCode: action.payload.profile.languageCode,
    firstName: action.payload.profile.firstName,
    lastName: action.payload.profile.lastName,
  },
});

const authGetAdminBySessionTokenSuccessReducer = (state, action) => ({
  ...state,
  admin: { ...action.payload },
});

const authReducer = createReducer(initialState, {
  [authTypes.AUTH]: authSuccess,
  [authTypes.AUTH_UPDATE_PROFILE]: authUpdateProfile,
  [authTypes.AUTH_LOGOUT]: authLogout,
  [authTypes.AUTH_USER_UPDATE_PROFILE]: userUpdateProfile,
  [authTypes.AUTH_LOGIN_SUCCESS]: authLoginSuccess,
  [authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN_SUCCESS]: authGetAdminBySessionTokenSuccessReducer,
});

export default authReducer;
