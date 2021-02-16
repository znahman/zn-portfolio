import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type IDCardProps = {
    name: string
    title: string
    pronouns: string
}

const IDCardStyle = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 200px;
    border: 2px solid white;
    border-radius: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 32px;
`

const ProfileImage = styled(Img)`
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid white;
`

const TextContainer = styled.div`
    padding-left: 32px;
    dispay: flex;
    flex-direction: column;
`

const IDCard: React.FC<IDCardProps> = (props: IDCardProps) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "profile-photo-transparent.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <IDCardStyle>
            <ProfileImage fluid={data.placeholderImage.childImageSharp.fluid} />
            <TextContainer>
                <div style={{ fontWeight: `bold`, fontSize: `24px` }}>
                    {props.name}
                </div>
                <div>{props.title}</div>
                <div style={{fontStyle: `italic`, fontSize: `12px`}}>{props.pronouns}</div>
            </TextContainer>
        </IDCardStyle>
    )
}

export default IDCard
