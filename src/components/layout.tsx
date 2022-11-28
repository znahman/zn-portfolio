/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'

type LayoutProps = {
    children: React.ReactNode
}

const MainContainer = styled(`div`)`
    margin: auto;
    width: 800px;
    @media (max-width: 600px) {
        width: 350px;
    }
`

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    // leaving this comment as an example of how to use "useStaticQuery"
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <>
            <Global
                styles={css`
                    div {
                        font-family: Verdana;
                        color: white;
                    }
                    html {
                        overflow-y: scroll;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        background: #3a3b3c;
                    }
                `}
            />
            <MainContainer>
                <Header/>
                <main>{props.children}</main>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Layout
