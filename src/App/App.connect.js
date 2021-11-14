import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from 'domains/auth';
import { selectors as uiSelectors, actions as uiActions } from 'domains/ui';

const mapStateToProps = (state) => ({
  isSnackbarOpen: uiSelectors.isSnackbarOpen(state),
  isInfoSnackbarOpen: uiSelectors.isInfoSnackbarOpen(state),
  message: uiSelectors.getMessage(state),
  errorDetails: uiSelectors.getErrorDetails(state),
  severity: uiSelectors.getSeverityDetails(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      autoLogin: authActions.autoLogin,
      closeSnackbar: uiActions.closeSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
