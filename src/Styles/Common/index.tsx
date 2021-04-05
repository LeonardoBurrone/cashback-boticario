import { Container, Paper, TextField } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Container)`
  && {
    display: flex;
    flex-flow: column;
  }
`;

const CBContent = styled(Paper)`
  && {
    padding: 20px;
    &.center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CBTextField = styled(TextField)`
  && {
    min-width: 100%;
  }
`;

const CBToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar
}));

export { CBContainer, CBContent, CBTextField, CBToolbar };
