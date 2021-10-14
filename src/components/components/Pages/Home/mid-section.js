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
                <li>Frontend Developer for 5 years</li>
                <li>Drawn to problem solving</li>
                <li>Mom to three little ones</li>
                <li>Being creative is my hobby</li>
            </ul>
            <Link to="about" className="page-links">Learn More <span className="arrow">&rarr;</span></Link>
        </MidSectionStyle>
    </React.Fragment>

)

export default MidSection;