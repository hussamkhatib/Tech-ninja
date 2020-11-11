import React from 'react'
import questionData from './questiondata'

const Question = ({Index}) => {
    return (
        <div>
          {questionData[Index].question}
        </div>
    )
}

export default Question
