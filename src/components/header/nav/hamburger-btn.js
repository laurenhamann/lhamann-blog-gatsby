import React from 'react';
import HamburgerStyle from './styles/hamburger-btn-style'

const HamburgerBtn = (props) => (
    <HamburgerStyle
        className={props.change ? "container change" : "container"} 
        onClick={props.click} onKeyDown={props.click} role = "button" ariaLabel="nav" 
        tabIndex={0}
    >
            <div className="bar1">
            </div>
            <div className="bar2">
            </div>
            <div className="bar3">
            </div>
        </HamburgerStyle>
)

export default HamburgerBtn;