import React from 'react';
import useLogo from '../hooks/use-logo';
import Image from 'gatsby-image';

const Logo = (props) => {
    const data = useLogo();
    console.log(data.childImageSharp.fluid);
    return (
        <Image fluid={data.childImageSharp.fluid} alt="logo" />
    )
}

export default Logo;