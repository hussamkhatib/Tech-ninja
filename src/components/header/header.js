import React from 'react'
import { HeadWrapper,Heading } from './headerStyles'

const Header = ({ children}) => {
    return (
        <HeadWrapper>
            { children}
            <Heading>Tech Ninjas</Heading>
        </HeadWrapper>
    )
}

export default Header
