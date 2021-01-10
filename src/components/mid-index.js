import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import MiddleStyle from '../components/middle-style';


const MidIndex = ({ props }) => (
    <MiddleStyle className="mid-section">
        <div className="mid-div">
            <h1 className="special"> Quick Facts </h1>
            <ul>
                <li className="mid-li"> Frontend developer for 5 years </li>
                <li className="mid-li"> Drawn to problem-solving  </li>
                <li className="mid-li"> Mom of three little ones </li>
                <li className="mid-li"> Being creative is my hobby </li>
            </ul>
            <Link to="/about"><span className="special-link">Want to know more?</span><span className="load-link">&rarr;</span></Link>
        </div>
    </MiddleStyle>
);

export default MidIndex;