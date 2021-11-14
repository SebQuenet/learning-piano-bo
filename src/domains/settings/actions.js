import * as settingsTypes from './types';

export const provide = (settings) => ({
  type: settingsTypes.SETTING_PROVIDE,
  settings,
});

export const updateSettings = (settings) => ({
  type: settingsTypes.SETTINGS_UPDATE,
  settings,
});

export const updateSettingsSuccess = () => ({
  type: settingsTypes.SETTINGS_UPDATE_SUCCESS,
});

export const updateSettingsError = (error) => ({
  type: settingsTypes.SETTINGS_UPDATE_ERROR,
  error,
});

export const fetchSettings = () => ({
  type: settingsTypes.SETTINGS_FETCH,
});

export const fetchSettingsSuccess = (settings) => ({
  type: settingsTypes.SETTINGS_FETCH_SUCCESS,
  settings,
});

export const fetchSettingsError = (error) => ({
  type: settingsTypes.SETTINGS_FETCH_ERROR,
  error,
});
