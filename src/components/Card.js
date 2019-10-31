import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  font-size: 3em
`


const Card = () => {

    const [flipCard, setFlipCard] = React.useState(false)
    const toggleFlipCard = () => setFlipCard(prevState => !prevState)
   
    return (
      <>{
       <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
         <div key="front">
          <StyledButton onClick={toggleFlipCard}>My front</StyledButton>
         </div>
         <div key="back">
          <StyledButton onClick={toggleFlipCard}>My back</StyledButton>
         </div>
       </ReactCardFlip> 
      }

      </>
    )
  }

export default Card;