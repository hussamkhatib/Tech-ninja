import React from 'react'
import styled from 'styled-components'
import { RankHeading } from './streakStyles'

const Rank = ({ RankKyu,Active }) => {
    const RankDisplay = styled.p`
    background: ${Active};
    color: #262729; 
    padding: .4em 0.6em;
    border-radius: 20px;
    text-align: center;
    font-size:0.8em;`

 

    const Wrapper = styled.div`
    display: flex;
    padding:0.2em;
    align-items:center;
    justify-content: space-evenly;
    @media screen and (min-width: 769px) {
    grid-column:1; 
    flex-direction:unset;
    }`
    return (
    <Wrapper>
        <RankHeading>rank</RankHeading>
        <RankDisplay>
            {`${RankKyu} kyu`}
        </RankDisplay>
    </Wrapper>
    )
}

export default Rank
