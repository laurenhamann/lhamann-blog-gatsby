import React, {useEffect, useState} from 'react'
import HamburgerBtn from './hamburger-btn'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { p_size } from '../../Global/Styles/Variables/__clamps';

const NavStyle = styled('nav')`
    height:auto;
    margin: auto 15px;
    ul.hidden{
        opacity: 0;
    }
    .visible {
        transition: opacity 0.6s;
        opacity: 1;
    }
` 
const UlStyle = styled('ul')`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (min-width: 600px) {
        flex-direction: row;
        width: 40vw;
        justify-content: space-around;
    }
`

const NavUl = (props) => (
    <UlStyle className={props.visible ? "visible" : "hidden"} width={props.width} >
        <li className="nav-item">
            <Link to="/" activeClassName="active">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/projects" activeClassName="active">
                Projects
            </Link>
        </li>
        {/* <li className="nav-item">
            <Link to="/blogs" activeClassName="active">
                Blogs
            </Link>
        </li> */}
        <li className="nav-item">
            <Link to="/about" activeClassName="active">
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" activeClassName="active">
                Contact
            </Link>
        </li>
    </UlStyle>
)

const Nav = (props) => {
    return (
    <NavStyle width={props.width}>
    {console.log(props.width)}
        {
            props.width > 600 
                ? 
            <NavUl 
                visible ={true}
            /> 
                : 
            <>
                <HamburgerBtn 
                    change={props.opened}
                    click={props.click}
                />
                <NavUl 
                    visible={props.opened}
                    width={props.width} 
                /> 
            </>
        }
    </NavStyle>

)};

export default Nav;