import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './header'
import Question from './question'
import Options from './options'
import Button from './button'

const Card = () => {

    let [index, setIndex] = useState(0);
    
    const nextQuestion = () => {
         setIndex(index++)
    }

    return (
        <div>
            <Header />
            <Question Index ={index}/>
            <Options Index={index}/>
            <Button nextQuestion={nextQuestion}/>
        </div>
    )
}

export default Card
