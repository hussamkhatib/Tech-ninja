import React from 'react'
import styled from 'styled-components'

const Options = ({ Option,showAll,loadResult,Active,Random }) => {
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
                       
    const randomWrongChoices = [...wrong]
                           

    return (
        <Grid>   
          {showAll ?
          Random.map(item => (
             <Options key={item} onClick={loadResult} dangerouslySetInnerHTML={{__html: item}}/>
          ))
        :
        [correct,randomWrongChoices[0]].map(item =>(
          <Options key={item} onClick={loadResult} dangerouslySetInnerHTML={{__html: item}} />
       ))
       }     
        </Grid>
    )
}

export default Options
