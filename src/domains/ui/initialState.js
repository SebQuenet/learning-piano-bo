export const defaultSnackbar = {
  open: false,
  duration: 10000,
  type: 'ERROR',
};

export const defaultInfoSnackbar = {
  open: false,
  duration: 10000,
  type: 'INFO',
};

const initialState = {
  snackbar: defaultSnackbar,
  infoSnackbar: defaultInfoSnackbar,
  currentSpaceId: undefined,
};

export default initialState;
