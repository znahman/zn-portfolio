import React from 'react'
import ALink from './alink'

const Footer: React.FC = () => (
    <div>
        <hr />
        <ul>
            <li>
                View my {` `}
                <ALink
                    href="https://www.linkedin.com/in/zachary-nahman-50437a7b/"
                    linkText="LinkedIn"
                ></ALink>
                .
            </li>
            <li>
                See my code on {` `}
                <ALink
                    href="https://github.com/znahman"
                    linkText="GitHub"
                ></ALink>
                .
            </li>
        </ul>
    </div>
)

export default Footer
