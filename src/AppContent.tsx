import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar';
import SideMenu from './Components/SideMenu';
import Load from './Pages/Load';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import { history } from './Services/BrowserHistory';
import { GlobalStyle, RootDiv } from './styles';
import darkTheme from './Styles/Themes/dark';
import lightTheme from './Styles/Themes/light';

const AppContent: React.FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [isSideMenuOpened, setIsSideMenuOpened] = React.useState<boolean>(false);
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
          <Load />
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
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/dashboard" component={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/" />)} />
              <Route path="/register" component={() => (isLoggedIn ? <Register /> : <Redirect to="/" />)} />
            </Switch>
          </Router>
        </RootDiv>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default AppContent;
