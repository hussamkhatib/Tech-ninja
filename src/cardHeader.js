import React from 'react'
import styled from 'styled-components'


const CardHeader = ({Index,totalQuestions}) => {
const CardHeaderWrapper = styled.div`
background: #FBECD6;
color:#282C34;`

const QuestionNO = styled.div`
`

    return (
        <CardHeaderWrapper>
            <QuestionNO>{Index + 1} of {totalQuestions}</QuestionNO>            
        </CardHeaderWrapper>
    )
}

export default CardHeader
