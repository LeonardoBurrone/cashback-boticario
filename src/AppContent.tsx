import { Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar';
import RouteWithSubRoutes from './Components/RouteWithSubRoutes';

import routesConfig from './Config/routes';
import darkTheme from './Styles/Themes/dark';
import lightTheme from './Styles/Themes/light';
import { GlobalStyle, RootDiv } from './styles';

// TODO: tipar o any
// TODO: mudar chave de Login no AppBar

const AppContent: React.FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [themeProperties, setThemeProperties] = React.useState<Theme>({ ...lightTheme });

  React.useEffect(() => {
    setThemeProperties(isDarkMode ? { ...darkTheme } : { ...lightTheme });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={themeProperties}>
      <React.Fragment>
        <GlobalStyle />
        <CssBaseline />
        <AppBar isDarkMode={isDarkMode} isLoggedIn={true} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <Toolbar />
        <RootDiv>
          <Router>
            <Switch>
              {routesConfig.map((route: any, index: number) => {
                return <RouteWithSubRoutes key={index} {...route} />;
              })}
            </Switch>
          </Router>
        </RootDiv>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default AppContent;
