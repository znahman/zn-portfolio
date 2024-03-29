import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled(`div`)({
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    background: `black`,
    marginBottom: `32px`,
})

const HomeLink = styled(Link)({
    padding: `16px 16px 16px 32px`,
    color: `white`,
    textDecoration: `none`,
    [`&:hover`]: {
        textDecoration: `underline`,
        color: `#66ff00`,
    },
})

const PageLink = styled(Link)({
    padding: `16px 32px`,
    color: `white`,
    textDecoration: `none`,
    [`&:hover`]: {
        textDecoration: `underline`,
        color: `#66ff00`,
    },
})

const Header: React.FC = () => (
    <HeaderContainer>
        <HomeLink to="/">Home</HomeLink>
        <PageLink to="/resume">Resume</PageLink>
    </HeaderContainer>
)

export default Header
