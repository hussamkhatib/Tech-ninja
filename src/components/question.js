import React from 'react'
import styled from 'styled-components'

const Question = ({ Question,rankIndex,questionIndex }) => {
  const QuestionWrapper = styled.div`
  padding: 1em;
  text-align: center;`
   
  return (
        <QuestionWrapper>
            {Question[rankIndex][questionIndex].question}
        </QuestionWrapper>    
    )
}

export default Question
