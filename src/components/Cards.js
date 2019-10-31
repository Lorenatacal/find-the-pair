import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  font-size: 2em;
  height: 200px;
`


const Cards = () => {
    const [flipCard, setFlipCard] = React.useState(false)
    const toggleFlipCard = () => setFlipCard(prevState => !prevState)
    const [cards, setCards] = React.useState(Cards())

    function Cards(){
      let id = 0
      const images = {
        pig: '1',
        cow: '2',
        dog: '3',
        flower: '4',
        house: '5',
        baby: '6',
        star: '7',
        libra: '8',
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
    console.log(cards, 'cards')

    return(
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 200px)',
        gridTemplateRows: 'repeat(4, 200px)',
        justifyContent: 'center',
        margin: '2%'
      }}>
        {cards.map(({backImg, frontImg, flipped}, index) =>
            <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                <div key="front">
                  <StyledButton onClick={() => {
                    // schimb stateul unei proprietati din card care e in state
                      const copyOfCards = [...cards]
                      copyOfCards[index].flipped = true
                      setCards(copyOfCards)
                  }}
                    // changeFlipp({ cards, flipped, backImg, frontImg, setFlipCard })
                  >
                    {backImg}
                  </StyledButton>
                </div>
                <div key="back">
                  <StyledButton onClick={() => {
                    const copyOfCards = [...cards]
                    copyOfCards[index].flipped = false
                    setCards(copyOfCards)
                }}
                    // changeFlipp({ cards, flipped, backImg, frontImg, setFlipCard })
                  >{frontImg}
                  </StyledButton>
                </div>
              </ReactCardFlip> 
          )}
      </div>
    )
  }

  //change the prop flipped of each  card fith a for loop and set the flipc card state from true to false

  // function changeFlipp({ cards, flipped, backImg, frontImg, setFlipCard }) {
  //   for(let i=0; i<cards.length; i++) {
  //     if(cards[i].flipped === false) {
  //         setFlipCard.push(cards[i].flipped)      
  //     }
  //   }
  //   return null
  // }

export default Cards;