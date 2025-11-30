import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import ThemeToggle from './theme-toggle'
import { useTheme } from '../context/theme-context'

const HeaderContainer = styled.div<{ background: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${props => props.background};
    margin-bottom: 32px;
`

const HomeLink = styled(Link)<{ color: string; hoverColor: string }>`
    padding: 16px 16px 16px 32px;
    color: ${props => props.color};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: ${props => props.hoverColor};
    }
`

const PageLink = styled(Link)<{ color: string; hoverColor: string }>`
    padding: 16px 32px;
    color: ${props => props.color};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: ${props => props.hoverColor};
    }
`

const Header: React.FC = () => {
    const { themeColors } = useTheme()

    return (
        <HeaderContainer
            data-testid="header"
            background={themeColors.headerBackground}
        >
            <HomeLink
                to="/"
                color={themeColors.headerText}
                hoverColor={themeColors.headerHover}
            >
                Home
            </HomeLink>
            <PageLink
                to="/resume"
                color={themeColors.headerText}
                hoverColor={themeColors.headerHover}
            >
                Resume
            </PageLink>
            <ThemeToggle />
        </HeaderContainer>
    )
}

export default Header
