import React from 'react';
import { Link } from 'gatsby';
import SectionDivider from '../../Global/section-divider__';
import styled from '@emotion/styled'
import { clamps, flex, margin } from '../../Global/Styles/__global';

const MidSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    > .page-links {
        ${margin.center}
        margin-bottom: ${clamps.med_margin};
    }

    
`

const MidSection = () => (
    <React.Fragment>
        <SectionDivider />
        <MidSectionStyle>
            <h1> Fun Facts </h1>
            <ul>
                <li>Frontend Developer for over 5 years</li>
                <li>Problem Solving is my niche</li>
                <li>Drawn to being creative</li>
                <li>Learning more is my daily achievement</li>
            </ul>
            <Link to="about" className="page-links">Learn More <span className="arrow">&rarr;</span></Link>
        </MidSectionStyle>
    </React.Fragment>

)

export default MidSection;