import React, { ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import ALink from './alink'
import { CiSquareChevRight, CiSquareChevDown } from 'react-icons/ci'
import { useTheme } from '../context/theme-context'

type ExpandableResumeItemProps = {
    jobTitle: string
    workplaceTitle: string
    workplaceLink: string
    rightAlignText: string
    description: ReactNode
}

const FlexContainer = styled.div<{ borderColor: string }>`
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.borderColor};
    border-radius: 4px;
    padding: 6px;
    margin-bottom: 6px;
    cursor: pointer;
    user-select: none;
`

const RightAlignTextContainer = styled.div<{ color: string }>`
    margin-left: auto;
    padding-right: 2px;
    color: ${props => props.color};
    font-family: 'Courier New', monospace;
`

const TitleAndLinkContainer = styled.div`
    padding-left: 6px;
`

const DescriptionContainer = styled.div`
    margin: 4px 0 8px 12px;
`

const ExpandableResumeItem: React.FC<ExpandableResumeItemProps> = (
    props: ExpandableResumeItemProps
) => {
    const [isOpen, setOpen] = useState(false)
    const { themeColors } = useTheme()

    return (
        <>
            <FlexContainer
                onClick={() => setOpen(!isOpen)}
                onKeyDown={e => (e.key === 'Enter' ? setOpen(!isOpen) : '')}
                tabIndex={0}
                borderColor={themeColors.border}
            >
                {isOpen ? (
                    <CiSquareChevDown size={24} />
                ) : (
                    <CiSquareChevRight size={24} />
                )}
                <TitleAndLinkContainer>
                    <b>{props.jobTitle}</b>
                    {` at `}
                    <ALink
                        linkText={props.workplaceTitle}
                        href={props.workplaceLink}
                    />
                </TitleAndLinkContainer>
                <RightAlignTextContainer color={themeColors.accentGreen}>
                    {props.rightAlignText}
                </RightAlignTextContainer>
            </FlexContainer>
            {isOpen ? (
                <DescriptionContainer>{props.description}</DescriptionContainer>
            ) : (
                <></>
            )}
        </>
    )
}

export default ExpandableResumeItem
