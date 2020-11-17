import React from 'react'
import styled from 'styled-components'
import {PowerupsHeading} from '../streakStyles'


const Powerups = ({ Disabled,Active }) => {
    const Button = styled.button`
    background:${Active};
    border:none;
    padding:0.4em;
    &:disabled{
        
    }
    `;
    const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    gap: .4em;`
    
    const PowerupsContainer = styled.div`
    @media screen and (max-width: 768px) {
        grid-area:1 / 1 / 2/2;
    }
    `

    const buttonText = ['50/50','❄️','🚫','+1🖤']
    return (
        <PowerupsContainer>
            <PowerupsHeading>Powerups</PowerupsHeading>
            <ButtonDiv>
            {buttonText.map((text,index) => 
                <Button disabled={Disabled} key={index}>{text}</Button>
            )
            }
            </ButtonDiv>
        </PowerupsContainer>
    )
}

export default Powerups
