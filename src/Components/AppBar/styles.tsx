import { AppBar, IconButton } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

type Props = {
  theme: Theme;
};

const drawerWidth = 200;

const CBAppBar = styled(AppBar)`
  && {
    z-index: ${(props: Props) => props.theme.zIndex.drawer + 1};
    transition: ${(props: Props) =>
      props.theme.transitions.create(['width', 'margin'], {
        duration: props.theme.transitions.duration.leavingScreen,
        easing: props.theme.transitions.easing.sharp
      })};
    &.appBarShift {
      margin-left: ${drawerWidth}px;
      width: calc(100% - ${drawerWidth}px);
      transition: ${(props: Props) =>
        props.theme.transitions.create(['width', 'margin'], {
          duration: props.theme.transitions.duration.enteringScreen,
          easing: props.theme.transitions.easing.sharp
        })};
    }
  }
`;

const CBButtonDiv = styled('div')`
  && {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    &.appBarShift {
      flex-grow: 1;
    }
  }
`;

const ContrastButton = styled(IconButton)`
  && {
    padding: 0;
  }
`;

const LogoImg = styled('img')`
  && {
    width: 100px;
  }
`;

export { CBAppBar, CBButtonDiv, ContrastButton, LogoImg };
