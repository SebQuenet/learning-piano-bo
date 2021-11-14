export const getSnackbar = (state) => state.ui.snackbar;
export const isSnackbarOpen = (state) => state?.ui?.snackbar?.open;
export const isInfoSnackbarOpen = (state) => state?.ui?.infoSnackbar?.open;
export const getErrorDetails = (state) => state.ui?.snackbar;
export const getMessage = (state) => state.ui?.infoSnackbar?.message;
export const getCurrentSpaceId = (state) => state.ui?.currentSpaceId;
export const getSeverityDetails = (state) => state.ui?.infoSnackbar?.severity;
export const getIsModalOpen = (state, props) => state.ui[props.modalToCheck];
