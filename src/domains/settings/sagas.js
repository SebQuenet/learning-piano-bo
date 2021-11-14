import { takeEvery, put } from 'redux-saga/effects';
import { types as settingsTypes, actions as settingsActions, constants as settingsConstants } from 'domains/settings';
import { actions as uiActions } from 'domains/ui';
import { fetchSettings, updateSettings } from 'services/http';

import { extractError } from 'services/errorHandling';

export function* fetchSettingsSaga() {
  try {
    const settings = yield fetchSettings();
    yield put(settingsActions.fetchSettingsSuccess(settings));
  } catch (error) {
    yield put(settingsActions.fetchSettingsError(error));
  }
}

export function* fetchSettingsErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export function* updateSettingsSaga(action) {
  try {
    yield updateSettings({
      ...action.settings,
    });
    yield put(settingsActions.updateSettingsSuccess(action.settings));
    yield put(settingsActions.fetchSettings());
  } catch (error) {
    yield put(settingsActions.updateSettingsError(error));
  }
}

export function* updateSettingsSuccessSaga() {
  yield put(uiActions.snackbarOpenInfo('Paramètres modifiés avec succès.'));
}

export function* updateSettingsErrorSaga(action) {
  yield put(uiActions.snackbarOpenError(extractError(action.error)));
}

export default function* watchSettings() {
  yield takeEvery(settingsTypes.SETTINGS_FETCH, fetchSettingsSaga);
  yield takeEvery(settingsTypes.SETTINGS_FETCH_ERROR, fetchSettingsErrorSaga);
  yield takeEvery(settingsTypes.SETTINGS_UPDATE, updateSettingsSaga);
  yield takeEvery(settingsTypes.SETTINGS_UPDATE_SUCCESS, updateSettingsSuccessSaga);
  yield takeEvery(settingsTypes.SETTINGS_UPDATE_ERROR, updateSettingsErrorSaga);
}
