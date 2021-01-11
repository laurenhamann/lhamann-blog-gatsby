import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
//const pink = '#FBC3BC';
const navy = '#516684';
//const grey = '#a2aebf';
const dkPink = '#db777c';


const NavDiv = styled('div')`
    background-color: transparent;
    height: auto;
    padding: 5% 0;
    min-width: auto;
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-start;

    .bar1,
    .bar2,
    .bar3{
        width: 15px;
        height: 2.5px;
        background-color: ${navy};
        margin: 2px 0 2px auto;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(0px, 9.5px);
        transform: rotate(-45deg) translate(0px, 9.5px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(3px, -6px);
        transform: rotate(45deg) translate(3px, -6px);
    }

    .change:focus,
    .container:focus {
        outline: none;
    }
    .hidden{
        opacity: 0;
        display:none;
    }
    .visible {
        transition: opacity 0.6s;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;
        align-items: center;
    }
    nav a li{
        color: ${dkPink};
        list-style: none;
        text-shadow: 0px 1px 1px #0000004a;
        margin-top: 1vh;
        font-size: 2vmax;
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