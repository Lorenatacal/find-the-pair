import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-Family: Cantarell, italic
`
const StyledInput= styled.input`
    margin-left: 40%;
    margin-bottom: 2%;
    font-size: 1em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
`
const StyledButton= styled.button`
  font-size: 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
`

function UserName({name, setName}) {
    //const [name, setName] = React.useState('Player')
    const [typedInput, setTypedInput] = React.useState('')
    
    return(
        <>
            <StyledTitle>Welcome to the game {name}</StyledTitle>
            <StyledInput onChange={event => setTypedInput(event.target.value)} />
            <StyledButton onClick={() => {
                setName(typedInput)
            }}>Submit your Name</StyledButton>
        </>
    )
}

export default UserName;