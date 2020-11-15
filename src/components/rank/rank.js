import React from 'react'
import styled from 'styled-components'
import { RankHeading } from '../streakStyles'

const Rank = ({ RankKyu,Active }) => {
    const RankDisplay = styled.p`
    background: ${Active};
    color: #282c34; 
    align-items:center;
    padding: .4em 0.6em;
    border-radius: 10px;
    text-align: center;`

    const Wrapper = styled.div`
    `
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
