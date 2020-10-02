import { createBrowserHistory as createHistory } from 'history';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/redux/rootReducer';
import rootSaga from 'src/redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const middlewares: Array<any> = [sagaMiddleware, logger];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, history, persistor };
