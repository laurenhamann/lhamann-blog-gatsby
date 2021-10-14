import React from "react";
import { css, Global } from "@emotion/react";
import Header from '../Header/index';
import Footer from '../Footer/index';
import SEO from './helmet';


import { animation, elements, colors, clamps, typographyStyles } from './Styles/__global'


const Layout = ({ children }) => {
    return (
        <>
        <SEO />
        <Global
            styles={css`
            /* fonts */
            ${animation.colorChange}
    ${animation.pastelRainbow}

    ${typographyStyles}
    ${elements}
    * {
        box-sizing: border-box;
        margin-top: 0;
    }
    html,
    body {
        background-color: ${colors.light_neutral};
        max-width: 100vw;
    }
    body {
        margin: ${clamps.margin_top} 0 ${clamps.margin_bottom} 0;
    }
    ul li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    div>ul>li::before {
        content:"\\2022";
        animation-name: colorChange;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
        `}
            />
            <section className="top-section" >
                <Header />
            </section>
                {children}
                <Footer />
        </>
    );
}
export default Layout;
