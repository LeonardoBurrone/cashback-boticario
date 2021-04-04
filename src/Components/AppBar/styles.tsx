import { AppBar } from '@material-ui/core';
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
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }
`;

const LogoImg = styled('img')`
  && {
    width: 100px;
  }
`;

export { CBAppBar, CBButtonDiv, LogoImg };
