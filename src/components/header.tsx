import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

type HeaderProps = {
    siteTitle: string
}

const HeaderContainer = styled(`div`)({
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    background: `black`,
})

const RightJustifyContainer = styled(`div`)({
    marginLeft: `auto`,
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

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
    <HeaderContainer>
        <HomeLink to="/">{props.siteTitle}</HomeLink>
        <RightJustifyContainer>
            <PageLink to="/resume">resume</PageLink>
        </RightJustifyContainer>
    </HeaderContainer>
)

export default Header
