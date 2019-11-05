import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 2%;
  text-align: center;
  font-Family: Cantarell, italic
  font-color: white
`

function Timer () {
    const [counter, setCounter] = React.useState(0)

    React.useEffect(() => {
        setTimeout(() => {
            setCounter(prevValue => prevValue + 1);
        }, 1000);
    });

    return(
        <>
            <StyledTitle>Time: {counter}</StyledTitle>
        </>
    );
}

export default Timer;