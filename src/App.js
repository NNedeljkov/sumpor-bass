import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  h1 {
    font-size:32px;
  }
  h3 {
    font-size:24px;
  }
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  font-family: 'Ubuntu', sans-serif;

`;

const App = () => {



  return(
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Content />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App;