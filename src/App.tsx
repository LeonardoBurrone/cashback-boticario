import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';

import AppContent from './AppContent';
import Store from './Store';
import darkTheme from './Styles/Themes/dark';
import lightTheme from './Styles/Themes/light';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={lightTheme}>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
