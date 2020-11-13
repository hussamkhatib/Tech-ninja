import React from 'react'
import styled from 'styled-components'

const Button = ({ nextQuestion,Active }) => {
    const Button =  styled.button`
    padding: 2em;
    background:${Active};
    border: none;`    
    return (
        <>
            <Button onClick={nextQuestion}>
            Next
            </Button>
        </>
    )
}

export default Button
