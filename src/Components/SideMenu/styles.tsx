import { Drawer } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

type Props = {
  theme: Theme;
};

const drawerWidth = 200;

const CBDrawer = styled(Drawer)`
  && {
    width: ${drawerWidth}px;
    flex-shrink: 0;
    whitespace: 'nowrap';
    &.drawerOpen,
    &.drawerOpen .MuiDrawer-paper {
      width: ${drawerWidth}px;
      transition: ${(props: Props) =>
        props.theme.transitions.create(['width'], {
          duration: props.theme.transitions.duration.enteringScreen,
          easing: props.theme.transitions.easing.sharp
        })};
    }
    &.drawerClose,
    &.drawerClose .MuiDrawer-paper {
      transition: ${(props: Props) =>
        props.theme.transitions.create(['width'], {
          duration: props.theme.transitions.duration.leavingScreen,
          easing: props.theme.transitions.easing.sharp
        })};
      width: ${(props: Props) => props.theme.spacing(7.5)}px;
      ${(props: Props) => props.theme.breakpoints.up('sm')} {
        width: ${(props: Props) => props.theme.spacing(7.5)}px;
      }
      overflow-x: hidden;
    }
  }
`;

const OpenButtonDiv = styled('div')`
  && {
    display: flex;
    alignitems: center;
    justify-content: flex-end;
    padding: ${(props: Props) => props.theme.spacing(0, 1)};
  }
`;

export { CBDrawer, OpenButtonDiv };
