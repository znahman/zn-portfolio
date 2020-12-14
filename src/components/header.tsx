import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

type HeaderProps = {
    siteTitle: string
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: black;
`

const RightJustifyContainer = styled.div`
    margin-left: auto;
`

const HomeLink = styled(Link)`
    padding: 16px 16px 16px 32px;
    color: white;
    text-decoration: none;
`

const PageLink = styled(Link)`
    padding: 16px 32px;
    color: white;
    text-decoration: none;
`

const Header = (props: HeaderProps) => (
    <HeaderContainer>
        <HomeLink to="/">
            {props.siteTitle}
        </HomeLink>
        <RightJustifyContainer>
        <PageLink to="/resume">
            resume
        </PageLink>
        <PageLink to="/stack">
            tech
        </PageLink>
        </RightJustifyContainer>
    </HeaderContainer>
)

export default Header
