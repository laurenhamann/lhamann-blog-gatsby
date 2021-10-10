import React from "react";
import { css, Global } from "@emotion/react";
import Header from './header';
import Footer from './footer';
import SEO from './helmet';


import { globalStyles } from '../styles/global'


const Layout = ({ children }) => {
    return (
        <>
        <SEO />
        <Global
            styles={css`
            /* fonts */
            ${globalStyles}
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
