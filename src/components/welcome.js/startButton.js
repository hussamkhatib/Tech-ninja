import React from 'react'
import styled from 'styled-components'

const StartButton = ({ startGame }) => {
    
    const Button = styled.button`
    
    `

    return (
       <Button onClick={startGame}>
           Start
       </Button>
    )
}

export default StartButton
