/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'

type LayoutProps = {
    children: React.ReactNode
}

const MainContainer = styled.div`
    padding-top: 32px;
    margin: auto;
    width: 600px;
    @media (max-width: 400px) {
        width: 400px;
    }
`

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Global
                styles={css`
                    div {
                        font-family: Verdana;
                        color: white;
                    }
                    html,
                    body {
                        margin: 0;
                        padding: 0;
                        background: #3a3b3c;
                    }
                `}
            />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <MainContainer>
                <main>{props.children}</main>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Layout
