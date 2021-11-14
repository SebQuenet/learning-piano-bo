import * as types from './types';
import * as constants from './constants';

export const closeSnackbar = () => ({
  type: types.UI_SNACKBAR_CLOSE,
});

export const snackbarOpen = (message, severity) => ({
  type: types.UI_SNACKBAR_OPEN,
  message,
  severity,
});

export const snackbarOpenInfo = (message, severity) => ({
  type: types.UI_SNACKBAR_INFO_OPEN,
  message,
  severity,
});

export const snackbarOpenSuccess = (message) => ({
  type: types.UI_SNACKBAR_OPEN,
  message,
  severity: constants.SNACKBAR_SUCCESS,
});

export const snackbarOpenError = (error) => {
  if (!error) {
    return { type: types.UI_SNACKBAR_OPEN, error: 'Unknown error', severity: constants.SNACKBAR_ERROR };
  }
  return {
    type: types.UI_SNACKBAR_OPEN,
    error,
    severity: constants.SNACKBAR_ERROR,
  };
};

export const setCurrentSpaceIdAction = (spaceId) => ({
  type: types.UI_SET_SPACE_ID,
  payload: spaceId,
});

export const toggleIsModalOpenAction = (modalToToggle) => ({
  type: types.TOGGLE_IS_MODAL_OPEN,
  payload: modalToToggle,
});
