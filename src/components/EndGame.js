import React from 'react';
import Board from './Board';
import styled from 'styled-components';

const StyledScore = styled.h2`
  text-align: center;
`

function EndGame({ score }) {

    return(
      (score === 9)
        ? <>
            <StyledScore>🏆 Congrats! You smashed it! Your score was {score} 🥇</StyledScore>
            <Board />
          </>
        : <StyledScore>Your score is: {score}</StyledScore>
    )
  }

export default EndGame;