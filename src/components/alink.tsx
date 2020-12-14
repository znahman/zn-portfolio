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
    :hover{
        text-decoration: underline;
    }
`

const ALink = (props: ALinkProps) => (
    <StyledLink href={props.href} target="_blank">{props.linkText}</StyledLink>
)

export default ALink
