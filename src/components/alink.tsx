import React from 'react'
import styled from '@emotion/styled'

type ALinkProps = {
    linkText: string
    href: string
}

const StyledLink = styled.a`
    color: #15f4ee;
    font-family: 'Courier New', monospace;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    :hover {
        text-decoration: solid white underline 2px;
    }
`

const ALink: React.FC<ALinkProps> = (props: ALinkProps) => (
    <StyledLink
        href={props.href}
        aria-label={props.href + '(opens in a new tab)'}
        target="_blank"
    >
        {props.linkText}
    </StyledLink>
)

export default ALink
