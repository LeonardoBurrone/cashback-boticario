import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body,
  #root {
    min-height: 100%;
  }

  body{
    background: #FFF;
  }
`;

const RootDiv = styled('div')`
  && {
    display: flex;
    min-height: 100%;
  }
`;

export { GlobalStyle, RootDiv };
