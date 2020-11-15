import React from 'react'
import styled from 'styled-components'
import {PowerupsHeading} from '../streakStyles'

const Powerups = () => {
    const Button = styled.button`
    `;
    const PowerupsContainer = styled.div`
    `
    const buttonText = ['double-chance','50/50','skip question','+1 live']
    return (
        <PowerupsContainer>
            <PowerupsHeading>Powerups</PowerupsHeading>
            {buttonText.map((text,index) => 
                <Button key={index}>{text}</Button>
            )
            }
        </PowerupsContainer>
    )
}

export default Powerups
