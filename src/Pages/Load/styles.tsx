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
    align-items: center;
    padding: 30px;
  }
`;

export { ButtonDiv, CBDialog };
