import React from 'react'

import styled from 'styled-components'
const Card = ({ children,Active,Width }) => {
    const CardWrapper = styled.div`
    border: 3px solid ${Active};
    max-width: ${Width};
    min-height:40vh;
    `
    
      return(
          <>
        <CardWrapper>
            {children}
        </CardWrapper>
        </>
    ) 
}

export default Card
