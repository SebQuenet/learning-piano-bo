import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import auth, { sagas as authSagas } from './auth';
import settings, { sagas as settingsSagas } from './settings';
import ui from './ui';

export const createRootReducer = (history) => {
  const combinedReducers = {
    auth,
    router: connectRouter(history),
    settings,
    ui,
  };
  return combineReducers(combinedReducers);
};

export function* rootSaga() {
  yield all([call(authSagas), call(settingsSagas)]);
}
