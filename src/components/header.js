import React from 'react'
import Logo from './logo'
import { HeadWrapper,Heading } from './headerStyles'

const Header = () => {
    return (
        <HeadWrapper>
            <Logo />
            <Heading>Tech Ninjas</Heading>
        </HeadWrapper>
    )
}

export default Header
