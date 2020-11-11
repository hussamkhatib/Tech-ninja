import React, { useState } from 'react'

import Question from './question'
import Options from './options'
import Button from './button'
import CardHeader from '../cardHeader'

import questionData from './questiondata'
import {CardWrapper} from './cardStyles'

const Card = () => {

    let [index, setIndex] = useState(0);
    
    const nextQuestion = () => {
         setIndex(index + 1)
    }

    return (
        <CardWrapper>
            <CardHeader Index={index} totalQuestions={questionData.length}/>
            <Question Question={questionData} Index ={index}/>
            <Options Option={questionData} Index={index}/>
            <Button nextQuestion={nextQuestion}/>
        </CardWrapper>
    )
}

export default Card
