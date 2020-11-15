import React from 'react'
import styled from 'styled-components' 
import {SvgHeading} from '../streakStyles'
const Life = ({ Lives,Active }) => {
    const SvgContainer = styled.div`
    `;

    const Svg = styled.svg`
    padding: 0.2em  ;`

    return (
       <SvgContainer>
           <SvgHeading>Lives</SvgHeading>
        {
             Array.from(Array(Lives)).map((item, index) =>
             <Svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={Active}><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></Svg>
       )}
        </SvgContainer>
    )
}

export default Life
