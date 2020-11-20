import React from 'react'
import styled from 'styled-components'

const Options = ({ Option,showAll,loadResult,Active }) => {
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
    border: 2px solid ${Active};
    &:hover {
      background: ${Active};
      color: #262729;
    }
    `
    const correct = Option.answer
    const wrong =   Option.wrong
    const allChoices = [correct,...wrong]
                       // .sort(() => Math.random() - .5)
    const randomWrongChoices = [...wrong]
                              .sort(()=>Math.random()- .5)

    return (
        <Grid>   
          {showAll ?
          allChoices.map(item => (
             <Options key={item} onClick={loadResult}>{item}</Options> 
          ))
        :
        [correct,randomWrongChoices[0]].map(item =>(
          <Options key={item} onClick={loadResult}>{item}</Options> 
       ))
       }     
        
        </Grid>
    )
}

export default Options
