import React from 'react';
import useHeroImage from '../../hooks/use-hero-image';
import Image from 'gatsby-image';
import HeroStyle from './styles/hero-style';

const Hero = (props) => {
    const image = useHeroImage();
    return (
    <HeroStyle className="hero" width={props.width}>
        {
        props.width >= 768 ?
            <>
                <Image fluid={image.childImageSharp.fluid} alt="hero-banner-rainbow" />
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