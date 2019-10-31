import React from 'react';
import Cards from './Cards'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 2%;
  text-align: center;
  border: 0.1px solid grey;
`

function Board() {

    return(
      <StyledContainer>
        <Cards/>
      </StyledContainer>
    )
}

export default Board