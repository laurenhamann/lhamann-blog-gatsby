import React from 'react';
import styled from '@emotion/styled'
import { colors } from '../../Global/Styles/__global'

const HamburgerStyle = styled('div')`
    width: 15px;
    margin: 5px 0 5px auto;
    .bar1,
    .bar2,
    .bar3{
        width: 15px;
        height: 2.1px;
        background-color: ${colors.dark_neutral};
        margin: 3px;
        transition: 0.4s;
    }

    .bar1Change {
        -webkit-transform: rotate(-45deg) translate(0px, 9.5px);
        transform: rotate(-50deg) translate(-2px, 9.5px);
    }

    .bar2Change {opacity: 0;}

    .bar3Change {
        -webkit-transform: rotate(45deg) translate(3px, -6px);
        transform: rotate(50deg) translate(2.1px, -6px);
    }

    .change:focus,
    .container:focus {
        outline: none;
    }

`


const HamburgerBtn = (props) => (
    <HamburgerStyle
        className={props.change ? "container change" : "container"} 
        onClick={props.click} onKeyDown={props.click} role = "button" ariaLabel="nav" 
        tabIndex={0}
    >
            <div className={props.change ? "bar1Change bar1" : "bar1"}>
            </div>
            <div className={props.change ? "bar2Change bar2" : "bar2"}>
            </div>
            <div className={props.change ? "bar3Change bar3" : "bar3"}>
            </div>
        </HamburgerStyle>
)

export default HamburgerBtn;