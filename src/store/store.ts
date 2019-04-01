import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { rootSaga } from './root-saga';
import sagaManager from './sagaManager';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function configureStore(initialState?: object) {
  const store = createStore(rootReducer, initialState!, enhancer);

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV === 'development') {
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
      module.hot.accept('./root-reducer', () => store.replaceReducer(require('./root-reducer')));

      module.hot.accept('./sagaManager', () => {
        sagaManager.cancelSagas(store);
        require('./sagaManager').default.startSagas(sagaMiddleware);
      });
    }
  }
  return store;
}

// const store = configureStore();

export default configureStore;
