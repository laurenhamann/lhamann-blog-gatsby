import React from 'react'
import Rainbow from '../reusable/svg/rainbow'
import HeroStyle from './styles/hero-style'

const Hero = (props) => {
    return (
    <HeroStyle className="hero" width={props.width}>
        {
        props.width >= 768 ?
            <>
                <Rainbow />
                <h3 className="intro">
                    Frontend Web Developer -
                </h3>
            </>
            :
            <h3 className="intro">
                Frontend Web Developer -
            </h3>
        }
    </HeroStyle>
)}

export default Hero;