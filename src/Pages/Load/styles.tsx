import { Dialog } from '@material-ui/core';
import styled from 'styled-components';

const ButtonDiv = styled('div')`
  && {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const CBDialog = styled(Dialog)`
  & .MuiDialog-paperScrollPaper {
    padding: 20px;
  }
`;

export { ButtonDiv, CBDialog };
