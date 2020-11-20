import React from 'react'
import styled from 'styled-components'

const Welcome = ( {startGame}) => {
    const Wrapper = styled.div`
    text-align: center;`
    const Heading =styled.h2`
    padding:.8em;
    font-size:3em;`
    const Desc = styled.p`
    padding: 0.6em;
    margin-bottom:.2em;`
    const Button = styled.button`
    padding:.6em 1em;
    margin:0 .2em;
    `
    return (
        <Wrapper>   
        <Heading>A JavaScript Quiz</Heading>
        <Desc>you'll have to choose the output of code snippet given in the time limit.</Desc>
        <Button>
            Rules
        </Button>
        <Button onClick={startGame}>
           Start
       </Button>
        </Wrapper>
    )
}

export default Welcome
