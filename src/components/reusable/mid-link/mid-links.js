import React from 'react'
import { Link }  from 'gatsby'
import LinkStyle from './styles/link-style'
import SVG from './svg/mid-icon'
import SectionDivider from '../section-divider'

const MidLinks = () => (
    <>
        <SectionDivider />
        <LinkStyle>
            <div className="mid-link">
                <Link to="/blogs" className="large-link"> Go to Blogs</Link>
                <SVG />
                <Link to="/projects" className="large-link"> Go to Projects</Link>
            </div>
        </LinkStyle>
    </>
)

export default MidLinks;