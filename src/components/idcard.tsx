import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

type IDCardProps = {
    name: string
    title: string
    pronouns: string
}

const IDCardStyle = styled(`div`)({
    boxSizing: `border-box`,
    width: `350px`,
    height: `200px`,
    border: `2px solid white`,
    borderRadius: `20px`,
    margin: `auto`,
    display: `flex`,
    alignItems: `center`,
    padding: `12px`,
})

const ProfileImage = styled(GatsbyImage)({
    boxSizing: `border-box`,
    height: `100px`,
    width: `100px`,
    borderRadius: `50%`,
    border: `2px solid white`,
})

const TextContainer = styled(`div`)({
    paddingLeft: `32px`,
    dispay: `flex`,
    flexDirection: `column`,
})

const IDCard: React.FC<IDCardProps> = (props: IDCardProps) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "profile-photo-transparent.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(width: 100)
                }
            }
        }
    `)

    return (
        <IDCardStyle>
            <ProfileImage
                image={data.placeholderImage.childImageSharp.gatsbyImageData}
                alt={`profile image`}
            />
            <TextContainer>
                <div style={{ fontWeight: `bold`, fontSize: `24px` }}>
                    {props.name}
                </div>
                <div>{props.title}</div>
                <div style={{ fontStyle: `italic`, fontSize: `12px` }}>
                    {props.pronouns}
                </div>
            </TextContainer>
        </IDCardStyle>
    )
}

export default IDCard
