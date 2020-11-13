import React from 'react'
import styled from 'styled-components'

const Options = ({Option,rankIndex,questionIndex,loadResult}) => {
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
    
    const allChoices = [Option[rankIndex][questionIndex].answer,...Option[rankIndex][questionIndex].wrong]
                       // .sort(() => Math.random() - .5)
                        
    return (
        <Grid>   
          {allChoices.map(item => (
             <Options key={item} onClick={loadResult}>{item}</Options> 
          )
          )}
        </Grid>
    )
}

export default Options
