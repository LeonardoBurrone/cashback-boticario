import { Container, Paper } from '@material-ui/core';
import styled from 'styled-components';

const CBContainer = styled(Container)`
  && {
    background: #aaa543;
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

export { CBContainer, CBContent };
