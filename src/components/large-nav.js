import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const NavStyle = styled('nav')`
    padding-top: 5vh;
    & ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50vw;
        justify-content: space-between;
        padding: 1vh;
        margin-left: 5vw;
        a .nav-item {
            padding-right: 1.5vw;
            font-size: 0.7em;
            ${mq[1]} {
                font-size: 1em;
            }
        }
    }
`;
const LargeNav = (props) => (
    <NavStyle>
        <ul>
            <Link to="/" activeClassName="active"><li className="nav-item">Home</li></Link>
            <Link to="/" activeClassName="active"><li className="nav-item">Projects</li></Link>
            <Link to="/" activeClassName="active"><li className="nav-item">Blogs</li></Link>
            <Link to="/about" activeClassName="active"><li className="nav-item">About</li></Link>
            <Link to="/contact" activeClassName="active"><li className="nav-item">Contact</li></Link>
        </ul>
    </NavStyle>
)

export default LargeNav;