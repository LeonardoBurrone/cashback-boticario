import { Button, IconButton, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleOffOutlined from '@material-ui/icons/ToggleOffOutlined';
import ToggleOn from '@material-ui/icons/ToggleOn';
import React from 'react';

import { CBAppBar, CBButtonDiv } from './styles';

type Props = {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  isSideMenuOpened: boolean;
  onOpenDrawer: () => void;
  toggleTheme: () => void;
};

const AppBar: React.FunctionComponent<Props> = (props: Props) => {
  const theme = useTheme();

  return (
    <CBAppBar className={props.isSideMenuOpened ? 'appBarShift' : ''} position="fixed" theme={theme}>
      <Toolbar>
        {props.isLoggedIn && !props.isSideMenuOpened && (
          <IconButton aria-label="menu" color="inherit" edge="start" onClick={props.onOpenDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        <CBButtonDiv>
          <IconButton color="default">
            {props.isDarkMode ? <ToggleOn /> : <ToggleOffOutlined />}
            <Button color="default" onClick={props.toggleTheme}>
              Contraste
            </Button>
          </IconButton>
        </CBButtonDiv>
      </Toolbar>
    </CBAppBar>
  );
};

export default AppBar;
