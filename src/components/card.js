import React from 'react'
import {CardWrapper} from './cardStyles'

const Card = ({children}) => {

      return(
          <>
        <CardWrapper>
            {children}
        </CardWrapper>
        </>
    ) 
}

export default Card
