import React from 'react'
import HamburgerBtn from './hamburger-btn'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavStyle = styled('nav')`
    width: 40%;
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
    justify-content: space-around;
    @media (min-width: 768px) {
        flex-direction: row;
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
        <li className="nav-item">
            <Link to="/blogs" activeClassName="active">
                Blogs
            </Link>
        </li>
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

const Nav = (props) => (
    <NavStyle width={props.width}>
        {
            props.width > 768 
                ? 
            <NavUl 
                visible ={true}
            /> 
                : 
            <>
                <NavUl 
                    visible={props.opened}
                    width={props.width} 
                /> 
                <HamburgerBtn 
                    change={props.opened}
                    click={props.click}
                />
            </>
        }
    </NavStyle>

);

export default Nav;