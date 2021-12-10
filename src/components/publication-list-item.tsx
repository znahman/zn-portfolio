import React from 'react'
import styled from '@emotion/styled'

type PublicationListItemProps = {
    titleLink: React.ReactNode
    authors: string
    me: string
    venue: string
}

const StyledListItem = styled(`li`)({
    margin: `4px 0`,
})

const authorString = (authors: string, me: string): React.ReactNode => {
    const indexOfMe = authors.search(me)
    if (indexOfMe === 0 && authors.length === me.length) {
        // I'm the first and only author
        return <b>{authors.substring(0, me.length)}</b>
    }
    if (indexOfMe === 0 && authors.length > me.length) {
        // I'm the first author but there are others too
        return (
            <>
                <b>{authors.substring(0, me.length)}</b>
                {authors.substring(me.length, authors.length)}
            </>
        )
    } else {
        // I'm not the first author, but I'm in the list
        return (
            <>
                {authors.substring(0, indexOfMe)}
                <b>{authors.substring(indexOfMe, indexOfMe + me.length)}</b>
                {authors.substring(indexOfMe + me.length, authors.length)}
            </>
        )
    }
}

const PublicationListItem: React.FC<PublicationListItemProps> = (
    props: PublicationListItemProps
) => (
    <StyledListItem>
        {props.titleLink}
        <br />
        {authorString(props.authors, props.me)}
        <br />
        {props.venue}
    </StyledListItem>
)

export default PublicationListItem
