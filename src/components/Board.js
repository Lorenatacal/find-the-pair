import React from 'react';
import Card from './Card'
import styled from 'styled-components'


function Board() {
    const [boardContent, setBoardContent] = React.useState([
      {}, {}, {}, {},
      {}, {}, {}, {},
    ])
    const [card, setCard] = React.useState(buildCards())

console.log(card, 'card')
    function buildCards(){
      let id = 0
      const images = {
        react: 'url to img',
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
        return result
      }, [])
      return cards
    }

    return(
      <>
      </>
    )

//     return(
//     <div>
//       <div key="firstSetOfCards">
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 8%)',
//           gridTemplateRows: 'repeat(4, 8%)'
//         }}>
//           <Card index={1} key="front">1</Card>
//           <Card index={2}/>
//           <Card index={3}/>
//           <Card index={4}/>
//         </div>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 8%)',
//           gridTemplateRows: 'repeat(4, 8%)'
//         }}>
//           <Card index={5}/>
//           <Card index={6}/>
//           <Card index={7}/>
//           <Card index={8}/>
//         </div>
//       </div>
//       <div key="secondSetOfCards">
//       <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 8%)',
//           gridTemplateRows: 'repeat(4, 8%)'
//         }}>
//           <Card index={1}></Card>
//           <Card index={2}/>
//           <Card index={3}/>
//           <Card index={4}/>
//         </div>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 8%)',
//           gridTemplateRows: 'repeat(4, 8%)'
//         }}>
//           <Card index={5}/>
//           <Card index={6}/>
//           <Card index={7}/>
//           <Card index={8}/>
//         </div>
//       </div>
//     </div>
//     )
}

export default Board