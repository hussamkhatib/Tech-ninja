import React from 'react'
import styled from 'styled-components'

const Stats = ({ children }) => {
    const Wrapper = styled.div`
    @media screen and (max-width: 768px) {
    grid-row:1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 1em;
    }`
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Stats
