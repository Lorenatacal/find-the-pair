import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'


const Card = () => {

    const [flipCard, setFlipCard] = React.useState(false)
    const toggleFlipCard = () => setFlipCard(prevState => !prevState)
   
    return (
      <>{
       <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
         <div key="front">
          <button onClick={toggleFlipCard}>My front</button>
         </div>
         <div key="back">
          <button onClick={toggleFlipCard}>My back</button>
         </div>
       </ReactCardFlip> 
      }

      </>
    )
  }

export default Card;