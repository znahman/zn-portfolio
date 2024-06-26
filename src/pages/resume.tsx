import React from 'react'

import Layout from '../components/layout'
import ParagraphHeader from '../components/paragraph-header'
import ExpandableResumeItem from '../components/expandable-resume-item'
import styled from '@emotion/styled'
import ALink from '../components/alink'
import PublicationListItem from '../components/publication-list-item'

const ResumeList = styled(`ul`)({
    margin: 0,
    paddingBottom: `6px`,
})

const ResumeSectionHeader = styled(`h3`)({
    textAlign: `center`,
})

const Resume: React.FC = () => (
    <Layout>
        <ParagraphHeader title="Resume" />
        <p>
            <ResumeSectionHeader>Education:</ResumeSectionHeader>
            <ExpandableResumeItem
                jobTitle="MS in Computer Science"
                workplaceTitle={`CSM`}
                workplaceLink={`https://cs.mines.edu/`}
                rightAlignText={`2017 - 2019`}
                description={
                    <>
                        <li>
                            Researched long-term autonomy for mobile robots with
                            the{' '}
                            <ALink
                                href="http://hcr.mines.edu"
                                linkText="Human Centered Robotics Lab"
                            />{' '}
                            culminating in a Master's Thesis (linked below in
                            Publications)
                        </li>
                        <li>
                            Teaching Assistant for Introduction to Linux OS
                            (CSCI 274)
                        </li>
                        <li>
                            Scholarship recipient from the Computing-Mines
                            Affiliate Partnership Program (C-MAPP) sponsored by
                            GoGo Business Aviation
                        </li>
                        <li>
                            Led the Mapping team making an attempt at the DARPA
                            Subterranean Challenge utilizing Kalman filtering
                            and point cloud registration
                        </li>
                        <li>
                            Led the team that won the CSM Newmont Innovation
                            Challenge by developing a novel underground 3D
                            sensor mesh network
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Computer Science Classes"
                workplaceTitle={`Regis University`}
                workplaceLink={`https://www.regis.edu/`}
                rightAlignText={`2016`}
                description={
                    <li>
                        Attended undergraduate computer science courses to build
                        a background in computer science: Operating Systems,
                        Algorithms, Discrete Math, Data Structures, and Intro to
                        Programming
                    </li>
                }
            />
            <ExpandableResumeItem
                jobTitle="BS in Mechanical Engineering"
                workplaceTitle={`CSM`}
                workplaceLink={`https://mechanical.mines.edu/`}
                rightAlignText={`2011 - 2015`}
                description={
                    <>
                        <li>Varsity swimming</li>
                        <li>NASA Robotic Mining Competition 2015</li>
                        <li>
                            Poetry editor for{' '}
                            <ALink
                                linkText={`High Grade`}
                                href={`http://highgrade.mines.edu/`}
                            />
                        </li>
                    </>
                }
            />
            <ResumeSectionHeader>Work Experience:</ResumeSectionHeader>
            <ExpandableResumeItem
                jobTitle="Senior Software Development Engineer"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`May 2024 - Present`}
                description={
                    <>
                        <li>
                            Led cross-team construction of new schema
                            transformation serivce
                        </li>
                        <li>
                            Client (Typescript/React) and Server (Java)
                            development and on-call support for Workday's email
                            template editor: Notification Designer
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Software Development Engineer"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`Oct 2023 - May 2024`}
                description={
                    <>
                        <li>
                            Client (Typescript/React) and Server (Java)
                            development and on-call support for Workday's email
                            template editor: Notification Designer
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Software Engineering Manager"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`Oct 2022 - Oct 2023`}
                description={
                    <>
                        <li>
                            Engineering Manager for Workday Drive and File
                            Management Platform
                        </li>
                        <li>
                            Engineering Manager for Workday's rich text editing
                            platform
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Software Development Engineer"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`Feb 2020 - Oct 2022`}
                description={
                    <>
                        <li>
                            Client (Typescript/React) and Server (Java)
                            development and on-call support for Workday's Drive
                            product
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Software Engineer Intern"
                workplaceTitle={`Workday`}
                workplaceLink={`https://www.workday.com`}
                rightAlignText={`May 2019 - Dec 2019`}
                description={
                    <li>
                        Server (Java) development for Workday's Drive product
                    </li>
                }
            />
            <ExpandableResumeItem
                jobTitle="Robotics Engineer Intern"
                workplaceTitle={`SSL Robotics`}
                workplaceLink={`https://www.maxar.com/`}
                rightAlignText={`May 2018 - Aug 2018`}
                description={
                    <>
                        <li>
                            Built a robotic actuator test automation suite in
                            Ruby
                        </li>
                        <li>
                            Demonstrated LIDAR technology using ROS and MoveIt
                            package
                        </li>
                    </>
                }
            />
            <ExpandableResumeItem
                jobTitle="Project Engineer"
                workplaceTitle={`Wolf Robotics`}
                workplaceLink={`http://www.wolfrobotics.com/`}
                rightAlignText={`Jun 2015 - Feb 2018`}
                description={
                    <li>
                        Mechanical site support and integration at customer
                        facilty for 9 DOF overhead robotic welding gantry with
                        revolutionary automatic programming capability
                    </li>
                }
            />
            <ResumeSectionHeader>Publications:</ResumeSectionHeader>
            <ResumeList>
                <PublicationListItem
                    titleLink={
                        <ALink
                            linkText={`Voxel-Based Representation Learning for Place Recognition Based on 3D Point Clouds`}
                            href={`http://ras.papercept.net/images/temp/IROS/files/0686.pdf`}
                        />
                    }
                    authors={`Sriram Siva, Zachary Nahman, and Hao Zhang`}
                    me={`Zachary Nahman`}
                    venue={`IEEE/RSJ International Conference on Intelligent Robots and
                    Systems (IROS), 2020`}
                />
                <PublicationListItem
                    titleLink={
                        <ALink
                            linkText={`“Excuse Me, Robot”: Impact of Polite Robot Wakewords on Human-Robot Politeness`}
                            href={`https://mirrorlab.mines.edu/publications/williams2020icsr/`}
                        />
                    }
                    authors={`Tom Williams, Daniel Grollman, Mingyuan Han, Ryan Blake
                    Jackson, Jane Lockshin, Ruchen Wen, Zachary Nahman,
                    and Qin Zhu`}
                    me={`Zachary Nahman`}
                    venue={`International Conference on Social Robotics (ICSR), 2020.`}
                />
                <PublicationListItem
                    titleLink={
                        <ALink
                            linkText={`Robot Learning for Loop Closure Detection and SLAM`}
                            href={`https://mountainscholar.org/handle/11124/173999`}
                        />
                    }
                    authors={`Master's Thesis: Zachary Nahman`}
                    me={`Zachary Nahman`}
                    venue={`2019 - Mines Theses & Dissertations, 2019`}
                />
                <PublicationListItem
                    titleLink={
                        <ALink
                            linkText={`Poster: AI-enabled robotic NDE for structural damage diagnosis and mapping`}
                            href={``}
                        />
                    }
                    authors={`Xiaodong Shi, Zachary Nahman, Fares Alharbi, Ciaron Hamilton, Yiming Deng, and Hao Zhang`}
                    me={`Zachary Nahman`}
                    venue={`International Symposium on Applied Electromagnetics and Mechanics (ISEM), 2019. * Best Poster Award`}
                />
                <PublicationListItem
                    titleLink={
                        <ALink
                            linkText={`Colorado's Best Emerging Poets: An Anthology`}
                            href={`https://www.amazon.com/Colorados-Best-Emerging-Poets-Anthology/dp/1984105795/ref=sr_1_4?dchild=1&keywords=colorado+best+emerging+poets&qid=1608001536&sr=8-4`}
                        />
                    }
                    authors={`Zachary Nahman`}
                    me={`Zachary Nahman`}
                    venue={`Poem: Steel My Resolve, 2018`}
                />
            </ResumeList>
        </p>
    </Layout>
)

export default Resume
