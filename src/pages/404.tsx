import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ParagraphHeader from '../components/paragraph-header'

const NotFoundPage: React.FC = () => (
    <Layout>
        <SEO title="404: Not found" />
        <ParagraphHeader title="404: not found" />
        <p>You just hit a route that doesn't exist :(</p>
    </Layout>
)

export default NotFoundPage
