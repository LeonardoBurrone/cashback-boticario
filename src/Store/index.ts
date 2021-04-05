import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './RootReducer';
import rootSagas from './RootSagas';

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWare = applyMiddleware(...middlewares);

  const compose = composeWithDevTools(middleWare);

  const storeCreator = createStore(rootReducer, compose);

  sagaMiddleware.run(rootSagas);

  return storeCreator;
};

const Store = create();

export default Store;
