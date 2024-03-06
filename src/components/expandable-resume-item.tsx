import React, { ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import ALink from './alink'
import { CiSquareChevRight, CiSquareChevDown } from 'react-icons/ci'

type ExpandableResumeItemProps = {
    jobTitle: string
    workplaceTitle: string
    workplaceLink: string
    rightAlignText: string
    description: ReactNode
}

const FlexContainer = styled(`div`)({
    display: `flex`,
    alignItems: `center`,
    border: `2px solid #6c6f73`,
    borderRadius: `4px`,
    padding: `6px`,
    marginBottom: `6px`,
    cursor: `pointer`,
    userSelect: `none`,
})

const RightAlignTextContainer = styled.div`
    margin-left: auto;
    padding-right: 2px;
    color: #66ff00;
    font-family: 'Courier New', monospace;
`

const TitleAndLinkContainer = styled(`div`)({
    paddingLeft: `6px`,
})

const DescriptionContainer = styled(`div`)({
    margin: `4px 0 8px 12px`,
})

const ExpandableResumeItem: React.FC<ExpandableResumeItemProps> = (
    props: ExpandableResumeItemProps
) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <FlexContainer onClick={() => setOpen(!isOpen)} tabIndex={0}>
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
                <RightAlignTextContainer>
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
