import { createReducer } from '@reduxjs/toolkit';
import initialState from './initialState';

import * as settingsTypes from './types';

const provideSettings = (state, action) => ({ ...state, settings: action.settings });
const fetchSettingsSuccess = (state, action) => ({ ...state, settings: action.settings });

const updateSettings = (state, action) => ({ ...state, settings: action.settings });

const settingsReducer = createReducer(initialState, {
  [settingsTypes.SETTING_PROVIDE]: provideSettings,
  [settingsTypes.SETTINGS_UPDATE]: updateSettings,
  [settingsTypes.SETTINGS_FETCH_SUCCESS]: fetchSettingsSuccess,
});

export default settingsReducer;
