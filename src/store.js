import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import { createRootReducer, rootSaga } from './domains';

const store = (history) => {
  const composeEnhancers =
    (process.env.NODE_ENV === 'development' && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const sagaMiddleware = createSagaMiddleware();
  const storeInstance = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return storeInstance;
};

export default store;
