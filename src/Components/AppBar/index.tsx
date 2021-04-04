import { Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ToggleOffOutlined from '@material-ui/icons/ToggleOffOutlined';
import ToggleOn from '@material-ui/icons/ToggleOn';
import React from 'react';

import { CBAppBar, CBButtonDiv, ContrastButton, LogoImg } from './styles';

import Logo from '../../Assets/logo.svg';

type Props = {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  isSideMenuOpened: boolean;
  onOpenDrawer: () => void;
  toggleTheme: () => void;
};

const AppBar: React.FunctionComponent<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    handleClose();
    props.toggleTheme();
  };

  const renderContrastButton = () => {
    return (
      <ContrastButton>
        {props.isDarkMode ? <ToggleOn /> : <ToggleOffOutlined />}
        <Button onClick={toggleTheme}>Contraste</Button>
      </ContrastButton>
    );
  };

  return (
    <CBAppBar className={props.isSideMenuOpened ? 'appBarShift' : ''} position="fixed" theme={theme}>
      <Toolbar>
        {props.isLoggedIn && !props.isSideMenuOpened && (
          <IconButton aria-label="menu" color="inherit" edge="start" onClick={props.onOpenDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        {!props.isSideMenuOpened && <LogoImg src={Logo} alt="logo" />}
        {!props.isLoggedIn && (
          <CBButtonDiv className={!props.isLoggedIn && 'appBarShift'}>{renderContrastButton()}</CBButtonDiv>
        )}
        {props.isLoggedIn && (
          <CBButtonDiv className={props.isSideMenuOpened ? '' : 'appBarShift'}>
            <Typography variant="subtitle1">Olá Revendedor</Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'app-bar-menu'}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem>{renderContrastButton()}</MenuItem>
              <MenuItem onClick={handleClose}>Sair</MenuItem>
            </Menu>
          </CBButtonDiv>
        )}
      </Toolbar>
    </CBAppBar>
  );
};

export default AppBar;
