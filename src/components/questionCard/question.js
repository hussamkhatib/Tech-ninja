import React from 'react'
import styled from 'styled-components'

const Question = ({ Question,rankIndex,questionIndex }) => {
  const QuestionWrapper = styled.div`
  padding: 1em;
  text-align: center;
  min-height:30vh;
  display:flex;
  justify-content:center;
  align-items:center;`
   
const QuestionH = styled.h2`
`;
  return (
        <QuestionWrapper>
            <QuestionH>{Question[rankIndex][questionIndex].question}</QuestionH>
        </QuestionWrapper>    
    )
}

export default Question
