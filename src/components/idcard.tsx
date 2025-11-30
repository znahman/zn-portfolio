import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useTheme } from '../context/theme-context'

// TODO: eventually this component should be separated from the image logic so that it doesn't need to know anything specific about me

type IDCardProps = {
    name: string
    title: string
    pronouns: string
}

const IDCardStyle = styled.div<{ borderColor: string }>`
    box-sizing: border-box;
    width: 365px;
    height: 200px;
    border: 2px solid ${props => props.borderColor};
    border-radius: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 12px;
`

const ProfileImage = styled(GatsbyImage)<{ borderColor: string }>`
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid ${props => props.borderColor};
`

const TextContainer = styled.div`
    padding-left: 32px;
    display: flex;
    flex-direction: column;
`

const IDCard: React.FC<IDCardProps> = (props: IDCardProps) => {
    const { themeColors } = useTheme()
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
        <IDCardStyle data-testid="id-card" borderColor={themeColors.cardBorder}>
            <ProfileImage
                image={data.placeholderImage.childImageSharp.gatsbyImageData}
                alt={`Profile snapshot of website owner Zach Nahman.`}
                borderColor={themeColors.cardBorder}
            />
            <TextContainer data-testid="id-card-text">
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
