/* eslint-disable */

import { takeEvery, put } from 'redux-saga/effects';
import { actions as uiActions } from 'domains/ui';
import { extractError } from 'services/errorHandling';
import { login, reinitPassword, changePasswordService, getBySessionTokenService } from 'services/http';
import axiosInstance from 'services/axios';
import { push } from 'connected-react-router';

import { types as authTypes, actions as authActions } from '.';

export function* logoutSaga() {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  yield put(push('/'));
}

export function* autoLoginSaga() {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      // ...
    }
  } catch (error) {
    yield put(authActions.loginError(error));
  }
}

export function* loginSaga({ payload }) {
  try {
    const { token, expiresIn, profile } = yield login(payload.email, payload.password);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expiresIn);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    yield put(authActions.loginSuccess(profile, token, expiresIn));
    push('/');
  } catch (error) {
    yield put(authActions.loginError(error));
  }
}

export function* loginErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export function* reinitPasswordSaga(action) {
  try {
    yield reinitPassword(action.payload);
    yield put(authActions.reinitPasswordSuccess());
  } catch (error) {
    yield put(authActions.reinitPasswordError(error));
  }
}
export function* reinitPasswordSuccessSaga() {
  yield put(uiActions.snackbarOpenInfo('E-mail envoyé.'));
}

export function* reinitPasswordErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export function* changePasswordSaga(action) {
  try {
    yield changePasswordService(action.payload);
    yield put(authActions.changePasswordSuccess());
  } catch (error) {
    yield put(authActions.changePasswordError(error));
  }
}
export function* changePasswordSuccessSaga() {
  yield put(uiActions.snackbarOpenInfo('Mot de passe modifié.'));
}
export function* changePasswordErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export function* getBySessionTokenSaga() {
  try {
    const admin = yield getBySessionTokenService();
    yield put(authActions.getBySessionTokenSuccess(admin));
  } catch (error) {
    yield put(authActions.getBySessionTokenError(error));
  }
}

export function* getBySessionTokenErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export default function* watchAuthSaga() {
  yield takeEvery(authTypes.AUTH_AUTO_LOGIN, autoLoginSaga);
  yield takeEvery(authTypes.AUTH_LOGIN, loginSaga);
  yield takeEvery(authTypes.AUTH_LOGIN_ERROR, loginErrorSaga);
  yield takeEvery(authTypes.AUTH_LOGOUT, logoutSaga);
  yield takeEvery(authTypes.AUTH_REINIT_PASSWORD, reinitPasswordSaga);
  yield takeEvery(authTypes.AUTH_REINIT_PASSWORD_SUCCESS, reinitPasswordSuccessSaga);
  yield takeEvery(authTypes.AUTH_REINIT_PASSWORD_ERROR, reinitPasswordErrorSaga);
  yield takeEvery(authTypes.AUTH_CHANGE_PASSWORD, changePasswordSaga);
  yield takeEvery(authTypes.AUTH_CHANGE_PASSWORD_SUCCESS, changePasswordSuccessSaga);
  yield takeEvery(authTypes.AUTH_CHANGE_PASSWORD_ERROR, changePasswordErrorSaga);
  yield takeEvery(authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN, getBySessionTokenSaga);
  yield takeEvery(authTypes.AUTH_GET_ADMIN_BY_SESSION_TOKEN_ERROR, getBySessionTokenErrorSaga);
}
