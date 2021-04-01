import { AppBar as MaterialAppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleOffOutlined from '@material-ui/icons/ToggleOffOutlined';
import ToggleOn from '@material-ui/icons/ToggleOn';
import React from 'react';

import { CBButtonDiv } from './styles';

type Props = {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  toggleTheme: () => void;
};

const AppBar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <MaterialAppBar position="fixed">
      <Toolbar>
        {props.isLoggedIn && (
          <IconButton edge="start" color="inherit" aria-label="menu">
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
    </MaterialAppBar>
  );
};

export default AppBar;
