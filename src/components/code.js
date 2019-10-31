
  //     let id = 0
  //     const images = {
  //       pig: '1',
  //       cow: '2',
  //       dog: '3',
  //       flower: '4',
  //       house: '5',
  //       baby: '6',
  //       star: '7',
  //       libra: '8',
  //     }
  //     const cards = Object.keys(images).reduce((result,key) => {
  //       const createCard = () => ({
  //         id: id++,
  //         type: key,
  //         backImg: 'url to backImg',
  //         frontImg: images[key],
  //         flipped: true
  //       })
  //       result.push(createCard())
  //       result.push(createCard())
  //       return result
  //     }, [])
  //     return cards
  //   }

  //   return(
  //     <div>
  //       {cards.map(({backImg, frontImg, flipped}) =>
  //         <div style={{
  //           display: 'grid',
  //           gridTemplateColumns: 'repeat(4, 10%)',
  //           gridTemplateRows: 'repeat(4, 10%)'
  //         }}>
  //           <ReactCardFlip isFlipped={flipCard} flipDirection="vertical">
  //               <div key="front">
  //                 <StyledButton onClick={toggleFlipCard}>{backImg}</StyledButton>
  //               </div>
  //               <div key="back">
  //                 <StyledButton onClick={toggleFlipCard}>{frontImg}</StyledButton>
  //               </div>
  //               </ReactCardFlip> 
  //           </div>
  //         )}
  //     </div>
  //   )
  // }

  // function changeFlipp({ cards, flipped }) {
  //   for(let i=0; i<cards.length; i++) {
  //     if(cards[i].flipped === 'false') {
  //         return
  //     }
  //   }