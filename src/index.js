import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './browserHistory';
import App from './App';
import store from './store';

import './index.css';
import './index.module.scss';

ReactDOM.render(
  <Provider store={store(history)}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
