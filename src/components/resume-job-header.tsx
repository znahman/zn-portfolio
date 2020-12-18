import React from 'react'
import styled from '@emotion/styled'
import ALink from './alink'

type ResumeJobHeaderProps = {
    jobTitle: string
    workplaceTitle: string
    workplaceLink: string
    rightAlignText: string
}

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`

const RightAlignTextContainer = styled.div`
    margin-left: auto;
    color: #66ff00;
    font-family: 'Courier New', monospace;
`

const ResumeJobHeader: React.FC<ResumeJobHeaderProps> = (
    props: ResumeJobHeaderProps
) => (
    <FlexContainer>
        <div>
            <b>{props.jobTitle}</b>
            {` at `}
            <ALink linkText={props.workplaceTitle} href={props.workplaceLink} />
        </div>
        <RightAlignTextContainer>
            {props.rightAlignText}
        </RightAlignTextContainer>
    </FlexContainer>
)

export default ResumeJobHeader
