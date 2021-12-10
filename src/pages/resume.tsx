import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ParagraphHeader from '../components/paragraph-header'
import ResumeJobHeader from '../components/resume-job-header'
import styled from '@emotion/styled'
import ALink from '../components/alink'

const ResumeList = styled(`ul`)({
    margin: 0,
    paddingBottom: `6px`,
})

const ResumeListItem = styled(`li`)({
    margin: `4px 0`,
})

const ResumeSectionHeader = styled(`h3`)({
    textAlign: `center`,
})

const Resume: React.FC = () => (
    <Layout>
        <SEO title="Resume" />
        <ParagraphHeader title="resume" />
        <p>
            <ResumeSectionHeader>Education:</ResumeSectionHeader>
            <ResumeJobHeader
                jobTitle="MS in Computer Science"
                workplaceTitle={`CSM`}
                workplaceLink={`https://cs.mines.edu/`}
                rightAlignText={`2017 - 2019`}
            />
            <ResumeList>
                <ResumeListItem>
                    Researched long-term autonomy for mobile robots with the
                    {` `}
                    <ALink
                        href="http://hcr.mines.edu"
                        linkText="Human Centered Robotics Lab"
                    />
                </ResumeListItem>
            </ResumeList>
            <ResumeJobHeader
                jobTitle="Computer Science Classes"
                workplaceTitle={`Regis University`}
                workplaceLink={`https://www.regis.edu/`}
                rightAlignText={`2016`}
            />
            <ResumeList>
                <ResumeListItem>
                    Attended undergraduate computer science courses to build a
                    background in computer science
                </ResumeListItem>
            </ResumeList>
            <ResumeJobHeader
                jobTitle="BS in Mechanical Engineering"
                workplaceTitle={`CSM`}
                workplaceLink={`https://mechanical.mines.edu/`}
                rightAlignText={`2011 - 2015`}
            />
            <ResumeList>
                <ResumeListItem>Varsity swimming</ResumeListItem>
                <ResumeListItem>
                    Poetry editor for{' '}
                    <ALink
                        linkText={`High Grade`}
                        href={`http://highgrade.mines.edu/`}
                    />
                </ResumeListItem>
            </ResumeList>
            <ResumeSectionHeader>Work Experience:</ResumeSectionHeader>
            <ResumeJobHeader
                jobTitle="Software Development Engineer"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`Feb 2020 - Present`}
            />
            <ResumeList>
                <ResumeListItem>
                    Front-end development for Workdy's Drive product
                </ResumeListItem>
                <ResumeListItem>
                    Worked on product re-architecture
                </ResumeListItem>
                <ResumeListItem>Participant in on-call rotation</ResumeListItem>
            </ResumeList>
            <ResumeJobHeader
                jobTitle="Software Engineer Intern"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`May 2019 - Dec 2019`}
            />
            <ResumeList>
                <ResumeListItem>
                    Back-end development for Workday's Drive product
                </ResumeListItem>
                <ResumeListItem>
                    Built endpoints for sharing features
                </ResumeListItem>
            </ResumeList>
            <ResumeJobHeader
                jobTitle="Robotics Engineer Intern"
                workplaceTitle={`SSL Robotics`}
                workplaceLink={`https://www.maxar.com/`}
                rightAlignText={`May 2018 - Aug 2018`}
            />
            <ResumeList>
                <ResumeListItem>
                    Built a robotic actuator test automation suite in Ruby
                </ResumeListItem>
                <ResumeListItem>
                    Demonstrated LIDAR technology using ROS and MoveIt package
                </ResumeListItem>
            </ResumeList>
            <ResumeJobHeader
                jobTitle="Project Engineer"
                workplaceTitle={`Wolf Robotics`}
                workplaceLink={`http://www.wolfrobotics.com/`}
                rightAlignText={`Jun 2015 - Feb 2018`}
            />
            <ResumeList>
                <ResumeListItem>
                    Mechanical site support and integration at customer facilty
                    for 9 DOF overhead robotic welding gantry with revolutionary
                    automatic programming capability
                </ResumeListItem>
            </ResumeList>
            <ResumeSectionHeader>Publications:</ResumeSectionHeader>
            <ResumeList>
                <ResumeListItem>
                    <ALink
                        linkText={`“Excuse Me, Robot”: Impact of Polite Robot Wakewords on Human-Robot Politeness`}
                        href={`https://mirrorlab.mines.edu/publications/williams2020icsr/`}
                    />
                    <br />
                    Tom Williams, Daniel Grollman, Mingyuan Han, Ryan Blake
                    Jackson, Jane Lockshin, Ruchen Wen, <b>Zachary Nahman</b>,
                    and Qin Zhu
                    <br />
                    International Conference on Social Robotics (ICSR), 2020.
                </ResumeListItem>
                <ResumeListItem>
                    <ALink
                        linkText={`Voxel-Based Representation Learning for Place Recognition Based on 3D Point Clouds`}
                        href={`http://ras.papercept.net/images/temp/IROS/files/0686.pdf`}
                    />
                    <br />
                    Sriram Siva, <b>Zachary Nahman</b>, and Hao Zhang
                    <br />
                    IEEE/RSJ International Conference on Intelligent Robots and
                    Systems (IROS), 2020.
                </ResumeListItem>
                <ResumeListItem>
                    Master's Thesis: {` `}
                    <ALink
                        linkText={`Robot Learning for Loop Closure Detection and SLAM`}
                        href={`https://mountainscholar.org/handle/11124/173999`}
                    />
                    <br />
                    <b>Zachary Nahman</b>
                    <br />
                    2019 - Mines Theses & Dissertations, 2019.
                </ResumeListItem>
                <ResumeListItem>
                    Featured in: {` `}
                    <ALink
                        linkText={`Colorado's Best Emerging Poets: An Anthology`}
                        href={`https://www.amazon.com/Colorados-Best-Emerging-Poets-Anthology/dp/1984105795/ref=sr_1_4?dchild=1&keywords=colorado+best+emerging+poets&qid=1608001536&sr=8-4`}
                    />
                    <br />
                    Poem: <i>Steel My Resolve</i>, 2018.
                </ResumeListItem>
            </ResumeList>
        </p>
    </Layout>
)

export default Resume
