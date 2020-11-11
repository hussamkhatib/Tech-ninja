import React from 'react'
import styled from 'styled-components'

const Button = ({nextQuestion}) => {
    const Button =  styled.button`
    padding: 1em;`    
    return (
        <>
            <Button onClick={nextQuestion}>
            </Button>
        </>
    )
}

export default Button
