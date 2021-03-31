import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Store from './Store';
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const App: React.FunctionComponent = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </div>
    </Provider>
  );
};

export default App;
