import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

import { CBDrawer, OpenButtonDiv } from './styles';

type Props = {
  onCloseDrawer: () => void;
  isSideMenuOpened: boolean;
};

const SideMenu: React.FunctionComponent<Props> = (props: Props) => {
  const theme = useTheme();

  return (
    <React.Fragment>
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </CBDrawer>
    </React.Fragment>
  );
};

export default SideMenu;
