import React from 'react'

import Layout from '../components/layout'
import IDCard from '../components/idcard'
import ParagraphHeader from '../components/paragraph-header'
import ALink from '../components/alink'

const IndexPage: React.FC = () => (
    <Layout>
        <IDCard
            name="Zach Nahman"
            title="Senior Software Engineer"
            pronouns="He/Him/His"
        />
        <ParagraphHeader title="hello world" />
        <p style={{ lineHeight: `1.6`, textAlign: `justify` }}>
            I am a Senior Software Engineer at{` `}
            <ALink href="https://www.baesystems.com/en-us/who-we-are/space-and-mission-systems" linkText="BAE Space & Mission Systems" />. 
            My interest lies in software that interacts with the physical world, working cross-functionally to accomplish great feats, and building strong teams.
            My career has spanned aerospace, HR enterprise software, engineering leadership, aerospace robotics, and industrial automation.
        </p>
        <p style={{ lineHeight: `1.6`, textAlign: `justify` }}>
            In 2019 I earned a Master's degree from the{` `}
            <ALink
                href="https://www.mines.edu"
                linkText="Colorado School of Mines"
            />
            {` `}where I researched long-term autonomy for mobile robots with
            the{` `}
            <ALink
                href="http://hcr.mines.edu"
                linkText="Human-Centered Robotics Lab"
            />
            .
        </p>
        <p style={{ lineHeight: `1.6`, textAlign: `justify` }}>
            When I'm not writing code, I enjoy spending time with my wife and
            family. We've got a spicy cat named Gordon and a sweet dog named
            Emma. I also enjoy exercising, and picking up
            new hobbies. Thanks for visiting :)
        </p>
    </Layout>
)

export default IndexPage
