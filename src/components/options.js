import React from 'react'
import questionData from './questiondata'

const Options = ({Index}) => {
    let currentQuestion = questionData[Index].options

    return (
        <div>   
           <p>{currentQuestion[0]}</p>
           <p>{currentQuestion[1]}</p>
           <p>{currentQuestion[2]}</p>
           <p>{currentQuestion[3]}</p>
        </div>
    )
}

export default Options
