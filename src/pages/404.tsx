import React from 'react'

import Layout from '../components/layout'
import ParagraphHeader from '../components/paragraph-header'

const NotFoundPage: React.FC = () => (
    <Layout>
        <ParagraphHeader title="404: not found" />
        <p>You just hit a route that doesn't exist :(</p>
    </Layout>
)

export default NotFoundPage
