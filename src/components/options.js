import React from 'react'
import styled from 'styled-components'

const Options = ({Option,Index}) => {
    const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em;
    gap: 1em;       
    `
    const Options = styled.button`
    border-radius:3px;
    border: 2px solid #FBECD6;
    background: none;
    color: inherit;
    padding:1em;
    `

    return (
        <Grid>   
           <Options>{Option[Index].options[0]}</Options>
           <Options>{Option[Index].options[1]}</Options>
           <Options>{Option[Index].options[2]}</Options>
           <Options>{Option[Index].options[3]}</Options>
        </Grid>
    )
}

export default Options
