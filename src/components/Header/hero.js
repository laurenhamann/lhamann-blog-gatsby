import React from 'react'
import Rainbow from '../../assets/svg/rainbow'
import styled from '@emotion/styled'
import { clamps, margin, flex } from '../Global/Styles/__global';

const HeroStyle = styled('div')`
    align-self: center;
    min-width: auto;
    ${margin.center}
    height: ${clamps.hero_banner_height};
    ${flex.flexRow}
    ${flex.justifyCenter}
    gap: 12px;
    >div.rainbow-svg {
        width: ${clamps.hero_banner_width};
        height: auto;
        margin-right: 5px;
    }

    .intro {
        ${props => props.width > 768 ? 
        `margin-left: ${clamps.med_margin};
        margin-top: ${clamps.margin_top};` 
        : 
        `margin: 0;`}
        align-self: center;
    }
`

const Hero = () => {
    return (
    <HeroStyle className="hero">
        <Rainbow />
        <h3 className="intro">
            Frontend Web Developer -
        </h3>
    </HeroStyle>
)}

export default Hero;