import React from 'react'
import styled from 'styled-components'

const Question = ({ Question,rankIndex,questionIndex }) => {
  const QuestionWrapper = styled.div`
  padding: 1em;
  min-height:15vh;
  display:flex;
 `


const QuestionH = styled.h2`
font-size:.8em;`;
  return (
        <QuestionWrapper>
          <QuestionH dangerouslySetInnerHTML={{__html: Question[rankIndex][questionIndex].question}} />
        </QuestionWrapper>    
    )
}

export default Question
