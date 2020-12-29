import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import VerticalDivider from './divider-vertical';

const MidAbout = () => (
    <section className="mid-section" css={css`
        display: flex;
        min-height: auto;
        height: 20vh;
        flex-direction: row;
        justify-content: space-between;
        padding: 5vh;
        margin: 5vh 0;
        align-items: center;
    `}>
        <Link to="/"><h3 className="about-links">&larr; Go to Projects</h3></Link>
        <VerticalDivider height='100%' />
        <Link to="/"><h3 className="about-links">Go to Blogs &rarr;</h3></Link>
    </section>
)

export default MidAbout;