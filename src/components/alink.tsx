import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../context/theme-context'

type ALinkProps = {
    linkText: string
    href: string
}

const StyledLink = styled.a<{ color: string; hoverColor: string }>`
    color: ${props => props.color};
    font-family: 'Courier New', monospace;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    :hover {
        text-decoration: solid ${props => props.hoverColor} underline 2px;
    }
`

const ALink: React.FC<ALinkProps> = (props: ALinkProps) => {
    const { themeColors } = useTheme()

    return (
        <StyledLink
            href={props.href}
            aria-label={props.href + '(opens in a new tab)'}
            target="_blank"
            color={themeColors.linkColor}
            hoverColor={themeColors.linkHover}
        >
            {props.linkText}
        </StyledLink>
    )
}

export default ALink
