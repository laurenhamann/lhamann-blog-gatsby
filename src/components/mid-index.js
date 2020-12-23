import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import MiddleStyle from '../components/middle-style';


const MidIndex = ({ props }) => (
    <MiddleStyle>
        <h1 css={css` font-size: 2.4em; margin: 2vh 0; `}> Quick Facts </h1>
        <ul>
            <li className="mid-li"> Learning and Developing for 5 years </li>
            <li className="mid-li"> heres number two </li>
            <li className="mid-li"> And number three </li>
            <li className="mid-li"> Definitely number 4 </li>
            <li className="mid-li"> .... maybe a number 5 </li>
        </ul>
        <Link to="/about"><span className="load-link special-link" css={css` color: #516684;`}>Wasn't enough?<br /> Learn more <br /><span className="load-link">&rarr;</span></span></Link>
    </MiddleStyle>
);

export default MidIndex;