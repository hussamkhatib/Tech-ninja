import React from 'react'
import styled from 'styled-components'


const CardHeader = ({ questionIndex,totalQuestions,Active }) => {
const CardHeaderWrapper = styled.div`
background: ${Active};
color:#282c34;
`
const QuestionNO = styled.div`
display:inline-block;
padding:.2em .5em;`
const Timing = styled.div`
text-align: end;
float: right;
padding:.2em .5em;`
    
return (
        <CardHeaderWrapper>
            <QuestionNO>{questionIndex + 1} of {totalQuestions}</QuestionNO>   
            <Timing>00:00</Timing>         
        </CardHeaderWrapper>
    )
}

export default CardHeader
