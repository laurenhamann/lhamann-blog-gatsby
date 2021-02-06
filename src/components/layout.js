import React from "react";
import { css, Global } from "@emotion/react";
import 'typeface-elsie';
import 'typeface-elsie-swash-caps';
import 'typeface-open-sans';
import 'typeface-open-sans-condensed';
import Header from './header/header';
import Footer from './footer/footer';
import SEO from './helmet';
// import '../static/fonts/fonts.css';

import { animation, fonts, colors, typographyStyles, globalStyles, elements } from './global/global'

const Layout = ({ children }) => {
    return (
        <>
        <SEO />
        <Global
            styles={css`
            /* fonts */
            ${fonts.elsie400}
            ${fonts.elsie400}
            ${fonts.elsie900}
            ${fonts.elsieSwash400}
            ${fonts.elsieSwash900}
            ${fonts.openSans300}
            ${fonts.openSans300Italic}
            ${fonts.openSans400}
            ${fonts.openSans400Italic}
            ${fonts.openSans700}
            ${fonts.openSans700Italic}
            ${fonts.openSansCondensed300}
            ${fonts.openSansCondensed700}
            ${fonts.openSansCondenseditalic300}

            ${globalStyles}
            ${animation.colorChange}
            html,
            body {
                background-color: ${colors.lightNeutral};
                max-width: 100vw;
            }
            ${typographyStyles}
            ${elements}
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
