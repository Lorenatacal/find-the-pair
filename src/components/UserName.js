import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-Family: Cantarell, italic
`
const StyledInput= styled.input`
    margin-left: 40%;
    font-size: 1em;
`
const StyledButton= styled.button`
    font-size: 1em;
`

function UserName(props) {
    const [name, setName] = React.useState('Player')
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