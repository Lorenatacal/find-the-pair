import React from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import UserName from './components/UserName'

const StyledTitle = styled.h1`
  margin: 2%;
  text-align: center;
  font-Family: Cantarell, italic
`

function App() {

  return (
    <div>
      <StyledTitle>Match the Pair</StyledTitle>
      <UserName />
      <Board />
    </div>
  );
}

export default App;
