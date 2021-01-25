import React from 'react'
import HamburgerBtn from './hamburger-btn'
import NavUl from './nav-ul'
import NavStyle from './styles/nav-style'


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