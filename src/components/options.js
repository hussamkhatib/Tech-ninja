import React from 'react'
import styled from 'styled-components'

const Options = ({Option,Index,nextQuestion}) => {
    const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em;
    gap: 1em;       
    `
    const Options = styled.button`
    border-radius:3px;
    background: none;
    color: inherit;
    padding:1em;
    border: 2px solid #FBECD6;
    &:hover {
      background: #FBECD6;
      color: #282C34;
    }
    `
    
    const allChoices = [Option[Index].answer,...Option[Index].wrong]
                        .sort(() => Math.random() - .5)
    return (
        <Grid>   
          {allChoices.map(item => (
             <Options  onClick={nextQuestion}>{item}</Options> 
          )
          )}
        </Grid>
    )
}

export default Options
