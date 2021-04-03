import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const CBTextField = styled(TextField)`
  && {
    min-width: 100%;
  }
`;

const CBToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar
}));

export { CBTextField, CBToolbar };
