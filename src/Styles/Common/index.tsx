import { Paper, TextField } from '@material-ui/core';
import styled from 'styled-components';

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

export { CBContent, CBTextField, CBToolbar };
