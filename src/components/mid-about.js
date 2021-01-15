import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import VerticalDivider from './divider-vertical';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const pink = '#FBC3BC';
const navy = '#516684';
//const grey = '#a2aebf';
const MidAbout = () => (
    <section className="mid-section" css={css`
        display: flex;
        min-height: auto;
        height: 20vh;
        flex-direction: row;
        justify-content: space-between;
        padding: 5vh;
        margin: 5vh auto;
        align-items: center;
        & a h3 span {
            color: ${pink};
        }
        ${mq[0]} {
            justify-content: center;
        }
        ${mq[3]} {
            border-radius: 18px;
        }
        a{
            font-size: 2vmax;
            ${mq[0]} {
                font-size: 2vmax;
                margin: auto 10vw;
            }
            .about-links{
                text-decoration: none;
                color: ${navy};
                ${mq[1]} {
                font-size: 1.5vmax;
            }
            }
            
        }
    `}>
        <Link to="/"><h3 className="about-links"><span>&larr;</span> Go to Projects</h3></Link>
        <VerticalDivider height='100%' />
        <Link to="/"><h3 className="about-links">Go to Blogs <span>&rarr;</span></h3></Link>
    </section>
)

export default MidAbout;