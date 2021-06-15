import React, { useState } from 'react'
import styled from '@emotion/styled'
import ALink from './alink'

type DynamicResumeItemProps = {
    title: string
    subtextTitle: string
    subtextLink: string
    rightAlignText: string
    detailText: string
}

const MainWrapper = styled.div`
    background: blue;
    border: 2px solid white;
    border-radius: 4px;
    padding: 4px;
`

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
`

const SubtextContainer = styled.div``

const RightAlignTextContainer = styled.div`
    margin-left: auto;
    color: #66ff00;
    font-family: 'Courier New', monospace;
`

const DynamicResumeItem: React.FC<DynamicResumeItemProps> = (
    props: DynamicResumeItemProps
) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <MainWrapper>
            <div onClick={() => setExpanded(!isExpanded)}>
                {`CLICK`}
            </div>
            <HeadingContainer>
                <b>{props.title}</b>
                <RightAlignTextContainer>
                    {props.rightAlignText}
                </RightAlignTextContainer>
            </HeadingContainer>
            <SubtextContainer>
                <ALink linkText={props.subtextTitle} href={props.subtextLink} />
            </SubtextContainer>
            {isExpanded && <>{props.detailText}</>}
        </MainWrapper>
    )
}

export default DynamicResumeItem
