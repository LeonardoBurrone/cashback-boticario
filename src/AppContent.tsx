import { Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Router, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar';
import RouteWithSubRoutes from './Components/RouteWithSubRoutes';
import SideMenu from './Components/SideMenu';

import routesConfig from './Config/routes';
import history from './Services/BrowserHistory';
import darkTheme from './Styles/Themes/dark';
import lightTheme from './Styles/Themes/light';
import { GlobalStyle, RootDiv } from './styles';

// TODO: tipar o any
// TODO: mudar chave de Login no AppBar

const AppContent: React.FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [isSideMenuOpened, setIsSideMenuOpened] = React.useState<boolean>(true);
  const [themeProperties, setThemeProperties] = React.useState<Theme>({ ...lightTheme });

  React.useEffect(() => {
    setThemeProperties(isDarkMode ? { ...darkTheme } : { ...lightTheme });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={themeProperties}>
      <React.Fragment>
        <GlobalStyle />
        <CssBaseline />
        <RootDiv>
          <Router history={history}>
            <AppBar
              isDarkMode={isDarkMode}
              isLoggedIn={true}
              isSideMenuOpened={isSideMenuOpened}
              onOpenDrawer={() => setIsSideMenuOpened(true)}
              toggleTheme={() => setIsDarkMode(!isDarkMode)}
            />
            <SideMenu onCloseDrawer={() => setIsSideMenuOpened(false)} isSideMenuOpened={isSideMenuOpened} />
            <Toolbar />
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
