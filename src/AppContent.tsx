import { Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';

import AppBar from './Components/AppBar';
import SideMenu from './Components/SideMenu';

import Routes from './Config/routes';
import history from './Services/BrowserHistory';
import darkTheme from './Styles/Themes/dark';
import lightTheme from './Styles/Themes/light';
import { GlobalStyle, RootDiv } from './styles';

const AppContent: React.FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [isSideMenuOpened, setIsSideMenuOpened] = React.useState<boolean>(true);
  const [themeProperties, setThemeProperties] = React.useState<Theme>({ ...lightTheme });
  const isLoggedIn = useSelector((state: reducers.rootReducer) => state.appStatus.isLoggedIn);

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
              isLoggedIn={isLoggedIn}
              isSideMenuOpened={!isLoggedIn ? false : isSideMenuOpened}
              onOpenDrawer={() => setIsSideMenuOpened(true)}
              toggleTheme={() => setIsDarkMode(!isDarkMode)}
            />
            {isLoggedIn && (
              <SideMenu onCloseDrawer={() => setIsSideMenuOpened(false)} isSideMenuOpened={isSideMenuOpened} />
            )}
            <Toolbar />
            <Routes isLoggedIn={isLoggedIn} />
          </Router>
        </RootDiv>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default AppContent;
