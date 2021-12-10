import React from 'react'
import styled from '@emotion/styled'

type ResumeListItemProps = {
    text: string
    link?: React.ReactNode
    followingText?: string
}

const StyledListItem = styled(`li`)({
    margin: `4px 0`,
})

const ResumeListItem: React.FC<ResumeListItemProps> = (
    props: ResumeListItemProps
) => (
    <StyledListItem>
        {props.text}
        {props.link}
        {props.followingText}
    </StyledListItem>
)

export default ResumeListItem
