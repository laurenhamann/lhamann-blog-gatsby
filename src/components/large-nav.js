import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
const pink = '#FBC3BC';
const navy = '#516684';
const grey = '#a2aebf';
const dkPink = '#db777c';
const black = '#000';
const white = '#fbfafb';
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
            font-size: 0.6em;
            color: ${pink};
            list-style: none;
            text-shadow: 0px 2px 1px #C0C0C0;
            padding-bottom: 1vh;
            ${mq[3]} {
                font-size: 0.8em;
            }
        }
        .active li {
            color: ${navy};
            text-decoration: underline;
        }
    }
`;
const LargeNav = (props) => (
    <NavStyle>
        <ul>
            <Link to="/" activeClassName="active"><li className="nav-item">Home</li></Link>
            <Link to="/all-projects" activeClassName="active"><li className="nav-item">Projects</li></Link>
            <Link to="/all-blogs" activeClassName="active"><li className="nav-item">Blogs</li></Link>
            <Link to="/about" activeClassName="active"><li className="nav-item">About</li></Link>
            <Link to="/contact" activeClassName="active"><li className="nav-item">Contact</li></Link>
        </ul>
    </NavStyle>
)

export default LargeNav;