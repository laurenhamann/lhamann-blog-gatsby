import React from 'react';


const HamburgerBtn = (props) => (
    <div 
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
        </div>
)

export default HamburgerBtn;