import React from 'react';
import Board from './components/Board';
import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 4%;
  text-align: center;
  font-Family: Cantarell, italic
`


function App() {

  return (
    <div>
      <StyledTitle>Match the Pair</StyledTitle>
        <Board />
    </div>
  );
}

export default App;
