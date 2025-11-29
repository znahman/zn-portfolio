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
import { useTheme } from '../context/theme-context'

type LayoutProps = {
    children: React.ReactNode
}

const MainContainer = styled.div<{ color: string }>`
    margin: auto;
    width: 800px;
    color: ${props => props.color};
    @media (max-width: 600px) {
        width: 350px;
    }
`

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const { themeColors } = useTheme()

    return (
        <>
            <Global
                styles={css`
                    div {
                        font-family: Verdana;
                        color: ${themeColors.text};
                    }
                    html {
                        overflow-y: scroll;
                        background: ${themeColors.background};
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        background: ${themeColors.background};
                        color: ${themeColors.text};
                    }
                    p {
                        color: ${themeColors.text};
                    }
                    ul,
                    li {
                        color: ${themeColors.text};
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        color: ${themeColors.text};
                    }
                    hr {
                        border-color: ${themeColors.border};
                    }
                `}
            />
            <MainContainer color={themeColors.text}>
                <Header />
                <main>{props.children}</main>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Layout
