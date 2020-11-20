import React from 'react'
import styled from 'styled-components'


const CardHeader = ({ questionIndex,totalQuestions,Active,Timer }) => {
const CardHeaderWrapper = styled.div`
background: ${Active};
color: #262729;
`
const QuestionNO = styled.div`
display:inline-block;
padding:.2em .5em;`
const Timing = styled.div`
text-align: end;
float: right;
padding:.2em .5em;`
const secondsToMMSS = seconds => {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return (m < 10 ? '0' : '') + m + ":" + ('0' + s).slice(-2);
}
return (
        <CardHeaderWrapper>
            <QuestionNO>{questionIndex + 1} of {totalQuestions}</QuestionNO>   
            <Timing>    {secondsToMMSS(Timer)}</Timing>         
        </CardHeaderWrapper>
    )
}

export default CardHeader
