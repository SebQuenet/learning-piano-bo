import { createReducer } from '@reduxjs/toolkit';
import initialState, { defaultSnackbar, defaultInfoSnackbar } from './initialState';

import * as uiTypes from './types';

const closeSnackbar = (state) => ({
  ...state,
  snackbar: defaultSnackbar,
  infoSnackbar: defaultInfoSnackbar,
});

const snackbarOpen = (state, action) => ({
  ...state,
  snackbar: {
    open: true,
    requestId: action.error?.requestId,
    error: action.error?.error,
    errorMessage: action.error?.errorMessage,
    module: action.error?.module,
    technicalError: action.error?.technicalError,
    stackTrace: action.stackTrace,
    severity: action.severity,
    data: action.error,
    type: action.type,
  },
});

const closeInfoSnackbar = (state) => ({
  ...initialState,
});

const snackbarInfoOpen = (state, action) => ({
  ...state,
  infoSnackbar: {
    open: true,
    message: action.message,
    type: action.type,
    severity: action.severity,
  },
});

const setSpaceIdReducer = (state, action) => ({
  ...state,
  currentSpaceId: action.payload,
});

const toggleIsModalOpen = (state, action) => ({
  ...state,
  [action.payload]: !state[action.payload],
});

const uiReducer = createReducer(initialState, {
  [uiTypes.UI_SNACKBAR_INFO_CLOSE]: closeInfoSnackbar,
  [uiTypes.UI_SNACKBAR_CLOSE]: closeSnackbar,
  [uiTypes.UI_SNACKBAR_OPEN]: snackbarOpen,
  [uiTypes.UI_SNACKBAR_INFO_OPEN]: snackbarInfoOpen,
  [uiTypes.UI_SET_SPACE_ID]: setSpaceIdReducer,
  [uiTypes.TOGGLE_IS_MODAL_OPEN]: toggleIsModalOpen,
});

export default uiReducer;
