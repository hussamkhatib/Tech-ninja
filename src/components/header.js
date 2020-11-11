import React from 'react'
import Logo from './logo'
import { Wrapper,Heading } from './headerStyles'

const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <Heading>Tech Ninjas</Heading>
        </Wrapper>
    )
}

export default Header
