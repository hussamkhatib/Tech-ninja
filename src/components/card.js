import React, { useState } from 'react'

import Question from './question'
import Options from './options'
import Button from './button'
import CardHeader from './cardHeader'

import questionData from './questiondata'
import {CardWrapper} from './cardStyles'

const Card = () => {

    let [index, setIndex] = useState(0);
    let [hide,setHide] = useState(false)
    const nextQuestion = () => {
        if(hide == true){
        setHide(false)
        setIndex(index + 1)
        }else{
            setHide(true)
        }
    }
  
    if(!hide)  {return(
        <CardWrapper>
            <CardHeader Index={index} totalQuestions={questionData.length}/>
            <Question Question={questionData} Index ={index}/>
            <Options Option={questionData} Index={index} nextQuestion={nextQuestion}/>
        </CardWrapper>
    )} else{ return(
        <CardWrapper >
            <Button nextQuestion={nextQuestion}/>
            </CardWrapper>
    )
    }
}

export default Card
