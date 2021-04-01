import { Paper, TextField } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Paper)`
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

const Title = styled.p`
  align-items: flex-start;
  display: flex;
  flex-flow: column;
`;

export { CBContainer, CBTextField, Title };
