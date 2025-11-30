import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../context/theme-context'

type ParagraphHeaderProps = {
    title: string
}

const TextContainer = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-family: 'Courier New', monospace;
    font-size: 32px;
    padding-top: 16px;
    margin: auto;
    text-align: center;
`

const ParagraphHeader: React.FC<ParagraphHeaderProps> = (
    props: ParagraphHeaderProps
) => {
    const { themeColors } = useTheme()

    return (
        <TextContainer color={themeColors.accentGreen}>
            {props.title}
        </TextContainer>
    )
}

export default ParagraphHeader
