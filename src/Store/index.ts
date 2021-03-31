import { compose, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './RootReducer';

const create = () => {
  const storeCreator = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  return storeCreator;
};

const Store = create();

export default Store;
