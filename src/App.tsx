import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import AppContent from './AppContent';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={Store}>
      <AppContent />
    </Provider>
  );
};

export default App;
