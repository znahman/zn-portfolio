/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
    description?: string
    title: string
}

const SEO: React.FC<SEOProps> = (props: SEOProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={`en`}
            title={props.title}
            description={props.description}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        />
    )
}

export default SEO
