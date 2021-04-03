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
    display: flex;
    flex-flow: column;
  }
`;

export { CBContainer, CBContent };
