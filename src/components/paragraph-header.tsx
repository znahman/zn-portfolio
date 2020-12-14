import React from 'react'
import styled from '@emotion/styled'

type ParagraphHeaderProps = {
    title: string
}

const TextContainer = styled.div`
    color: #66ff00;
    font-family: 'Courier New', monospace;
    font-size: 32px;
    padding-top: 16px;
    margin: auto;
    text-align: center;
`

const ParagraphHeader = (props: ParagraphHeaderProps) => (
    <TextContainer>
        {props.title}
    </TextContainer>
)

export default ParagraphHeader
