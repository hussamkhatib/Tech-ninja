import React from 'react'
import styled from 'styled-components'

const Question = ({Question,Index}) => {
  const QuestionWrapper = styled.div`
  padding: 1em;
  text-align: center;`
    return (
        <QuestionWrapper>
            <pre>{Question[Index].question}</pre>
        </QuestionWrapper>    
    )
}

export default Question
