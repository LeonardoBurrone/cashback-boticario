import React from 'react';
import { Provider } from 'react-redux';

import AppContent from './AppContent';
import Store from './Store';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={Store}>
      <AppContent />
    </Provider>
  );
};

export default App;
