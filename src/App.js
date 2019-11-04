import React from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import UserName from './components/UserName'

const StyledDiv = styled.div`
  margin: 2% 14%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`

const StyledTitle = styled.h1`
  margin: 2%;
  text-align: center;
  font-Family: Cantarell, italic
  font-color: white
`

function App() {
  const [name, setName] = React.useState('');

  
  return (
  <>
    <StyledDiv>
      <StyledTitle>Match the Pair</StyledTitle>
      <UserName name={name} setName={setName}/>
    </StyledDiv>

    <div>
    {
      (name !== '')
      ? <Board />
      : null
    }
    </div>
  </>
  );
}

export default App;
