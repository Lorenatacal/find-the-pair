import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  font-size: 2em;
`
const StyledImage = styled.img`
  width: 100%
`
const StyledFrontImage = styled.img`
  width: 100%;
  height: 200px
`


const Cards = () => {
    const [flipCard, setFlipCard] = React.useState(false)
    const toggleFlipCard = () => setFlipCard(prevState => !prevState)
    const [cards, setCards] = React.useState(Cards())

    function Cards(){
      let id = 0
      const images = {
        pig: "https://i2.wp.com/www.lkrecic.com/wp-content/uploads/2013/12/flying-pig-01.png?w=900&ssl=1",
        cow: 'https://image.freepik.com/free-vector/cartoon-funny-cow-giving-thumb-up_29190-4894.jpg',
        dog: 'https://cdn131.picsart.com/295233141090201.jpg?r1024x1024',
        flower: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/flower-bouquet-edit.jpg?itok=gOLk5la7',
        house: 'https://indaily.com.au/wp-content/uploads/2019/04/Screen-Shot-2019-04-12-at-8.04.06-am-850x455.png',
        baby: 'https://i2-prod.bristolpost.co.uk/incoming/article3033107.ece/ALTERNATES/s810/0_Happy-smiling-newborn-baby-in-wrap-sleeping-happily-in-cozy-blue-fur-cute-infant-baby.jpg',
        star: 'https://www.robinwieruch.de/static/4bc7cc1864e3c582347b700f8609abca/426ce/banner.jpg',
        mountain: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=2250&q=80',
        beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=416&h=312&q=60'
      }
      const cards = Object.keys(images).reduce((result,key) => {
        const createCard = () => ({
          id: id++,
          type: key,
          backImg: "red",
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
        gridTemplateColumns: 'repeat(6, 200px)',
        gridTemplateRows: 'repeat(6, 200px)',
        justifyContent: 'center',
        margin: '2%'
      }}>
        {cards.map(({backImg, frontImg, flipped}, index) =>
            <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                <div key="front">
                  <StyledButton onClick={() => {
                      const copyOfCards = [...cards]
                      copyOfCards[index].flipped = true
                      setCards(copyOfCards)
                  }}
                  >
                    <StyledImage src="https://loveisinmytummy.com/wp-content/uploads/2017/07/New-Blue-Background-Main-2.jpg"></StyledImage>
                  </StyledButton>
                </div>
                <div key="back">
                  <StyledButton onClick={() => {
                    const copyOfCards = [...cards]
                    copyOfCards[index].flipped = false
                    setCards(copyOfCards)
                }}
                    // changeFlipp({ cards, flipped, backImg, frontImg, setFlipCard })
                  >
                    <StyledFrontImage src={frontImg}></StyledFrontImage>
                  </StyledButton>
                </div>
              </ReactCardFlip> 
          )}
      </div>
    )
  }

export default Cards;