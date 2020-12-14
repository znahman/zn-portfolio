import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IDCard from '../components/idcard'
import ParagraphHeader from '../components/paragraph-header'
import ALink from '../components/alink'

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title="Home" />
        <IDCard name="Zach Nahman" title="Software Engineer" />
        <ParagraphHeader title="hello world" />
        <p style={{ lineHeight: `1.6`, textAlign: `justify` }}>
            I am a Software Development Engineer at{` `}
            <ALink href="https://www.workday.com" linkText="Workday" />. I love
            learning about the web and working with web applications. I've
            worked previously in industrial automation and aerospace robotics.
            In 2019 I earned a Master's degree from the{` `}
            <ALink
                href="https://www.mines.edu"
                linkText="Colorado School of Mines"
            />
            {` `}where I researched long-term autonomy for mobile robots with
            the{` `}
            <ALink
                href="https://hcr.mines.edu"
                linkText="Human Centered Robotics Lab"
            />
            .
        </p>
        <p style={{ lineHeight: `1.6`, textAlign: `justify` }}>
            When I'm not trying to wrangle bits, I enjoy spending time with my
            wife, Taylor, my cat, Gordon, exercising, and playing video games.
        </p>
    </Layout>
)

export default IndexPage
