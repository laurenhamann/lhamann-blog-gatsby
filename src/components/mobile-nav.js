import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
const NavDiv = styled('div')`
    background-color: ${props => props.opened ? '#fbfafb' : 'transparent'};
    height: auto;
    padding-bottom: 5px;
    min-width: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    padding: 1vh;
`;
const MobileNav = (props) => (
    <NavDiv 
        opened={props.opened} >
        <nav className={props.opened ? "visible" : "hidden"}>
            <ul>
                <Link to="/" activeClassName="active"><li className="nav-item">Home</li></Link>
                <Link to="/" activeClassName="active"><li className="nav-item">Projects</li></Link>
                <Link to="/" activeClassName="active"><li className="nav-item">Blogs</li></Link>
                <Link to="/about" activeClassName="active"><li className="nav-item">About</li></Link>
                <Link to="/contact" activeClassName="active"><li className="nav-item">Contact</li></Link>
            </ul>
        </nav>
        <div className={props.opened ? "container change" : "container"} onClick={props.clicked} onKeyDown={props.clicked} role = "button" tabIndex={0}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </NavDiv>
);

export default MobileNav;