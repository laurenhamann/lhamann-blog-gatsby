import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
//const pink = '#FBC3BC';
const navy = '#516684';
//const grey = '#a2aebf';
const dkPink = '#db777c';
// const black = '#000';
// const white = '#fbfafb';


const NavStyle = styled('nav')`
    padding-top: 5vh;
    align-self: center;
    & ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: 1vh;
        margin-left: 5vw;
        a .nav-item {
            color: ${navy};
            list-style: none;
            text-shadow: 0px 2px 1px #C0C0C0;
            padding-bottom: 1vh;
            margin-right: 1vw;
            font-size: 1.1vmax;
            text-transform: uppercase;
        }
        .active li {
            color: ${dkPink};
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