import { Divider, IconButton, List } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';

import { menuOptions } from './const';
import Option from './Option';
import { CBDrawer, OpenButtonDiv } from './styles';
import { MenuOption } from './types';

export type Props = {
  isSideMenuOpened: boolean;
  onCloseDrawer: () => void;
};

export const SideMenu: React.FunctionComponent<Props> = (props: Props) => {
  const theme = useTheme();

  return (
    <CBDrawer
      variant="permanent"
      className={props.isSideMenuOpened ? 'drawerOpen' : 'drawerClose'}
      theme={theme}
      open={props.isSideMenuOpened}
    >
      <OpenButtonDiv theme={theme}>
        <IconButton onClick={props.onCloseDrawer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </OpenButtonDiv>
      <Divider />
      <List>
        {menuOptions.map((option: MenuOption, index: number) => (
          <Option isSideMenuOpened={props.isSideMenuOpened} key={`${option.title}${index}`} option={option} />
        ))}
      </List>
    </CBDrawer>
  );
};

export default SideMenu;
