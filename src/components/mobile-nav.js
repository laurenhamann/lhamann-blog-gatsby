import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
const pink = '#FBC3BC';
const navy = '#516684';
// const grey = '#a2aebf';
// const dkPink = '#db777c';
// const black = '#000';
// const white = '#fbfafb';



const NavDiv = styled('div')`
    background-color: ${props => props.opened ? pink : 'transparent'};
    height: auto;
    padding-bottom: 5px;
    min-width: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    padding: 1vh;
    .bar1,
    .bar2,
    .bar3{
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
    .hidden{
        opacity: 0;
        display:none;
    }
    .visible {
        transition: opacity 0.6s;
        opacity: 1;
        display: flex;
    }
    nav a li{
        color: ${pink};
        list-style: none;
        text-shadow: 0px 2px 1px #C0C0C0;
        padding-bottom: 1vh;
    }
    nav ul .active li{
        /** active link color */
        color: ${navy};
        text-decoration: underline;
    }
`;
const MobileNav = (props) => (
    <NavDiv 
        opened={props.opened} >
        <nav className={props.opened ? "visible" : "hidden"}>
            <ul>
                <Link to="/" activeClassName="active"><li className="nav-item">Home</li></Link>
                <Link to="/all-projects" activeClassName="active"><li className="nav-item">Projects</li></Link>
                <Link to="/all-blogs" activeClassName="active"><li className="nav-item">Blogs</li></Link>
                <Link to="/about" activeClassName="active"><li className="nav-item">About</li></Link>
                <Link to="/contact" activeClassName="active"><li className="nav-item">Contact</li></Link>
            </ul>
        </nav>
        <div className={props.opened ? "container change" : "container"} onClick={props.clicked} onKeyDown={props.clicked} role = "button" ariaLabel="nav" tabIndex={0}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </NavDiv>
);

export default MobileNav;