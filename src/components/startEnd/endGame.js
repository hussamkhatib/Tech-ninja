import React from 'react'
import styled from 'styled-components'

const EndGame = ( {Rank} ) => {
    const Wrapper = styled.div`
    text-align:center;`
    const GameOver = styled.h2`
    padding:.7em;
    font-size:2.5em;`
    const Result = styled.p``
    return (
       <Wrapper>
           <GameOver>Game Over</GameOver>
           <Result>
               you finished {Rank} kyu
           </Result>
       </Wrapper>
    )
}

export default EndGame
