import React, { ReactFragment, useState } from 'react'
import styled from '@emotion/styled'
import ALink from './alink'

type ResumeJobHeaderProps = {
    jobTitle: string
    workplaceTitle: string
    workplaceLink: string
    rightAlignText: string
    description: ReactFragment
}

const FlexContainer = styled(`div`)({
    display: `flex`,
    alignItems: `center`,
    background: `black`,
    border: `solid blue`,
    padding: `2px`,
})

const RightAlignTextContainer = styled.div`
    margin-left: auto;
    color: #66ff00;
    font-family: 'Courier New', monospace;
`

const ResumeJobHeader: React.FC<ResumeJobHeaderProps> = (
    props: ResumeJobHeaderProps
) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <FlexContainer onClick={() => setOpen(!isOpen)}>
                <div>
                    <b>{props.jobTitle}</b>
                    {` at `}
                    <ALink
                        linkText={props.workplaceTitle}
                        href={props.workplaceLink}
                    />
                </div>
                <RightAlignTextContainer>
                    {props.rightAlignText}
                </RightAlignTextContainer>
            </FlexContainer>
            {isOpen ? <div>{props.description}</div> : <></>}
        </>
    )
}

export default ResumeJobHeader
