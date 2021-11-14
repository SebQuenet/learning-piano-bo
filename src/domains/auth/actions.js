import * as authTypes from './types';

export const auth = (token) => ({
  type: authTypes.AUTH,
  token,
});

export const updateProfile = (profile) => ({
  type: authTypes.AUTH_UPDATE_PROFILE,
  profile,
});

export const updatePassword = () => ({
  type: authTypes.AUTH_UPDATE_PASSWORD,
});

export const logout = () => ({
  type: authTypes.AUTH_LOGOUT,
});

export const reinitPassword = (email) => ({
  type: authTypes.AUTH_REINIT_PASSWORD,
  payload: email,
});

export const changePasswordByAdmin = ({ userId, newPassword }) => ({
  type: authTypes.AUTH_CHANGE_PASSWORD,
  payload: { userId, newPassword },
});

export const changePasswordSuccess = () => ({ type: authTypes.AUTH_CHANGE_PASSWORD_SUCCESS });
export const changePasswordError = (error) => ({ type: authTypes.AUTH_CHANGE_PASSWORD_ERROR, error });

export const reinitPasswordSuccess = () => ({ type: authTypes.AUTH_REINIT_PASSWORD_SUCCESS });
export const reinitPasswordError = (error) => ({
  type: authTypes.AUTH_REINIT_PASSWORD_ERROR,
  error,
});

export const updateAuthProfile = (profile) => ({
  type: authTypes.AUTH_USER_UPDATE_PROFILE,
  profile,
});

export const login = (email, password) => ({
  type: authTypes.AUTH_LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (profile, token, expirationDate) => ({
  type: authTypes.AUTH_LOGIN_SUCCESS,
  payload: {
    profile,
    token,
    expirationDate,
  },
});

export const loginError = (error) => ({
  type: authTypes.AUTH_LOGIN_ERROR,
  error,
});

export const autoLogin = () => ({
  type: authTypes.AUTH_AUTO_LOGIN,
});

export const getAdminBySessionToken = () => ({
  type: authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN,
});

export const getBySessionTokenSuccess = (admin) => ({
  type: authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN_SUCCESS,
  payload: admin,
});

export const getBySessionTokenError = (error) => ({
  type: authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN_ERROR,
  error,
});
