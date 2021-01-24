import React from "react";
import { css, Global } from "@emotion/react";
import 'typeface-elsie';
import 'typeface-elsie-swash-caps';
import 'typeface-open-sans';
import 'typeface-open-sans-condensed';
import Header from './header/header';
import Footer from './footer/footer';
import SEO from './helmet';
import '../static/fonts/fonts.css';
import { colors } from './global/colors';
import { fonts } from './global/fonts';
import  globalStyles  from './global/global-style';
import typographyStyles from './global/font-styles';
import { specialSizing } from './global/special-styles';
import { flex } from './global/flex-box';


const Layout = ({ children }) => {
    const breakpoints = [768, 1024, 1400, 1600]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )
    return (
        <>
        <SEO />
        <Global
            styles={css`
            /* fonts */
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
            html,
            body {
                background-color: ${colors.lightNeutral};
                max-width: 100vw;
            }
            ${typographyStyles}


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
