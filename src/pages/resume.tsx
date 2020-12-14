import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ParagraphHeader from '../components/paragraph-header'

const Resume: React.FC  = () => (
    <Layout>
        <SEO title="Resume" />
        <ParagraphHeader title="resume"/>
        <p>Once I had a job.</p>
    </Layout>
)

export default Resume
