import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  font-size: 3em
`


const Cards = () => {

    const [flipCard, setFlipCard] = React.useState(false)
    const toggleFlipCard = () => setFlipCard(prevState => !prevState)
    const [cards, setCards] = React.useState(Cards())

console.log(cards, 'card')
    function Cards(){

      let id = 0
      const images = {
        pig: 'url to 1',
        cow: 'url to 2',
        dog: 'http://pureimg.com/public/uploads/large/241499003424zkzd5dodbzeyrfobe3lacrcycpwmdmf3wfxenwrjrglmg74qmj9xhdlkgl4dfpkxkqsitckagnq7fik7bt53ya5fusnknnt1jjme.jpg',
        flower: 'url 4',
        house: 'url 5',
        baby: 'url 6',
        star: 'url 7',
        libra: 'url 8',
      }
      const cards = Object.keys(images).reduce((result,key) => {
        const createCard = () => ({
          id: id++,
          type: key,
          backImg: 'url to backImg',
          frontImg: images[key],
          flipped: false
        })
        result.push(createCard())
        result.push(createCard())
        return result
      }, [])
      return cards
    }

    return(
      <div>
        {cards.map((item) =>
          <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
              <div key="front">
                 <StyledButton onClick={toggleFlipCard}>My front</StyledButton>
              </div>
              <div key="back">
                 <StyledButton onClick={toggleFlipCard}>My back</StyledButton>
              </div>
              </ReactCardFlip> 
          )}
      </div>
    )
  }

export default Cards;