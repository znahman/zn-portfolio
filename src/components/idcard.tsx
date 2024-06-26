import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// TODO: eventually this component should be separated from the image logic so that it doesn't need to know anything specific about me

type IDCardProps = {
    name: string
    title: string
    pronouns: string
}

const IDCardStyle = styled(`div`)({
    boxSizing: `border-box`,
    width: `365px`,
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
                alt={`Profile snapshot of website owner Zach Nahman.`}
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
