import React from "react";
import "fontsource-open-sans";
import { css, Global } from "@emotion/react";
import 'typeface-bad-script';
import 'typeface-lato';
import Header from './header';
import Footer from './footer';
// add breakpoint mapping 
//possibly flowers or maybe a hover effect on computers that create a moving border
//760 fonts
//1024 & < fonts and spacing

const Layout = ({ children }) => {
    const breakpoints = [768, 1024, 1400, 1600]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )
    return (
        <>
        <Global
            styles={css`
            /* lato-300normal - latin */
            @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-display: swap;
            font-weight: 300;
            src:
                local('Lato Light '),
                local('Lato-Light'),
                url('./files/lato-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
                url('./files/lato-latin-300.woff') format('woff'); /* Modern Browsers */
            }

            /* lato-300italic - latin */
            @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-display: swap;
            font-weight: 300;
            src:
                local('Lato Light italic'),
                local('Lato-Lightitalic'),
                url('./files/lato-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
                url('./files/lato-latin-300italic.woff') format('woff'); /* Modern Browsers */
            }

            /* lato-400normal - latin */
            @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:
                local('Lato Regular '),
                local('Lato-Regular'),
                url('./files/lato-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
                url('./files/lato-latin-400.woff') format('woff'); /* Modern Browsers */
            }

    /* lato-400italic - latin */
            @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-display: swap;
            font-weight: 400;
            src:
                local('Lato Regular italic'),
                local('Lato-Regularitalic'),
                url('./files/lato-latin-400italic.woff2') format('woff2'), /* Super Modern Browsers */
                url('./files/lato-latin-400italic.woff') format('woff'); /* Modern Browsers */
            }
            @font-face {
                font-family: 'lemonmilk';
                src: url('./fonts/lemonmilklight-webfont.woff2') format('woff2'),
                        url('./fonts/lemonmilklight-webfont.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
            }
            @font-face {
                font-family: 'modern';
                src: url('./fonts/modernsans-light-webfont.woff2') format('woff2'),
                        url('./fonts/modernsans-light-webfont.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
            }
            @font-face {
                font-family: 'joselyna';
                src: url('./fonts/joselyna-webfont.woff2') format('woff2'),
                        url('./fonts/joselyna-webfont.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
            }
            * {
                box-sizing: border-box;
                margin: 0;
            }
            html,
            body {
                background-color: #516684;
                max-width: 100vw;
            }
        /** seperation of the sections from the background color */
            section {
                background-color: #fbfafb;
                width: 100vw;
            }

        
            h1{
                font-family: 'joselyna';
                font-size: 4em;
                margin: 2vh 0;
            }

            h2 {
                font-family: 'Lato';
                font-weight: 200;
                font-size: 1.4em;
                margin-bottom: 2vh;
            }

            h3{
                font-family: 'modern';
                text-decoration: underline;
                font-size: 1.75em;
            }

            p{
                font-family: 'Lato';
                font-weight: 300;
                ${mq[0]} {
                    font-size: 1.1em;
                }
            }
            a{
                font-family: 'Lemonmilk';
                font-weight: 300;
                font-size: 18px;
                text-decoration: none;
                height: auto;
            }
            a:hover {
                text-decoration: underline;
            }

    /**************************** Universal ***************************/
            .flex-row{
                display: flex;
                flex-direction: row;
            }

            .flex-col{
                display: flex;
                flex-direction: column;
            }
            .align-ends{
                justify-content: space-between;
                align-items: center;
            }
            .align-center{
                align-items: center;
                justify-content: space-around;
                ${mq[0]} {
                    justify-content: center;
                }
            }
    /**************************** //END// Universal ***************************/
    /**************************** HEADER ***************************/
            .top-section {
                box-shadow: 0 2px 10px 0 rgba(75, 75, 75, 0.5);
            }

            /** Navigation **/
            nav ul .active li{
                /** active link color */
                color: #516684;
                text-decoration: underline;
            }
            /** //END// Navigation **/
    /**************************** //END// HEADER ***************************/
    /**************************** MIDDLE SECTIONS ***************************/
            .mid-section {
                box-shadow: 0 -1px 8px 0 #4b4b4b, 0 2px 8px 0 #4b4b4b;
                margin: 5vh 0;
            }
            .load-link {
                color:#FBC3BC;
            }
            /**** Index page ****/
            .page-links{
                /*  index page project and blog links */
                color: #516684;
                ${mq[0]} {
                    font-size: 1.6em;
                    margin:auto 4vw;
                }
            }
            /* li */
            .mid-li {
                color: #000;
                font-family: 'modern';
                font-size: .75em;
                text-align: left;
                list-style: none;
                padding-bottom: 0.5vh;
            }
            .mid-li:before {
                /* adding dashes before each li for quick facts */
                content: " - ";
            }
            .special-link {
                /* special link styling for middle section on index page*/
                color: #516684;
                font-family: 'lemonmilk';
                font-size: 0.65em;
            }
            /* //END// li */
            /**** // END // Index page ****/


            /**** TEMPLATE PAGE *****/
            /* flex for entry */
            .article-flex {
                padding-top: 5vh;
                justify-content: center;
                text-align: center;
            }
            .article-flex h1 {
                font-size: 5em;
            }

            .article-flex p,
            .article-flex h3 {
                padding-top: 3vh;
            }

            .article-flex a{
                text-align: left;
                font-size: 0.75em;
                padding: 2.5vh;
            }
            .article-body{
                padding-top: 3vh;
            }
            /****** //END// TEMPLATE *****/
    /************************* //END// MIDDLE SECTION **************************/
    /************************* FOOTER **************************/
            .end-section {
                box-shadow: 0 -1px 8px 0 #4b4b4b;
            }
    /************************* //END// FOOTER **************************/
    /************************* Contact **************************/
            .contact-section{
                text-align: center;
                min-height: 60vh;
                height: auto;
                padding: 3vh;
            }

            .contact-section h1{
                margin-bottom: 0;
            }

            #contact-form {
                margin-top: 2vh;
                height: auto;
                padding: 2vmin;
                background-color: #516684;
                box-shadow: inset 0 0 10px rgb(75, 75, 75),
                            inset -1px -1px 10px rgb(75, 75, 75);
            }
            #contact-form label {
                display: flex;
                flex-direction: column;
                margin: 1vh auto;
                font-family: 'modern';
                font-size: 14px;
                color: #fff;

            }

            #contact-form label input{
                margin-top: 0.5vh;
                min-width: 150px;
                width: 50vw;
                max-width: 400px;
                min-height: 25px;
                height: 4.5vh;
                max-height: 45px;
                border: none;
                box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
            }

            #contact-form label textarea{
                box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
                width: 65vw;
                max-width: 500px;
                min-height: 15vh;
                margin: 2vh auto;
            }

            #submit-btn{
                width: 35vw;
                max-width: 300px;
                min-height: 25px;
                height: 5vh;
                margin: 1vh auto;
                border-radius: 10px;
                outline: none;
                border: none;
                box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
                background-color: #FBC3BC;
                font-family: 'Lato';
                font-weight: 400;
                text-shadow: 1px 1px 2px rgba(50, 50, 50);
                color: #fff;
            }
            #submit-btn:hover {
                background-color: #fff;
                color: #FBC3BC;
                text-shadow: none;
            }

    /************************* //END// Contact **************************/
        /* Figure out img styling */

            .w-80{
                width: 80vw;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
            /* styling for open and close Navigation */
            .bar1,
            .bar2,
            .bar3{
                width: 35px;
                height: 5px;
                background-color: #333;
                margin: 6px 0;
                transition: 0.4s;
            }
            .change .bar1 {
                -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                transform: rotate(-45deg) translate(-9px, 6px);
            }

            .change .bar2 {opacity: 0;}

            .change .bar3 {
                -webkit-transform: rotate(45deg) translate(-8px, -8px);
                transform: rotate(45deg) translate(-8px, -8px);
            }
            .hidden{
                opacity: 0;
                display:none;
            }
            .visible {
                transition: opacity 0.6s;
                opacity: 1;
                display: flex;
            }

            /* global li styles */
            nav a li{
                color: #fbc3bc;
                list-style: none;
                text-shadow: 0px 2px 1px #C0C0C0;
                padding-bottom: 1vh;
            }
            /** about middle styles */
            .about-links{
                font-size: 1em;
                text-decoration: none;
                color: #516684;
            }

            .about-font-span{
                text-align: left;
            }

            /** footer icons styling */
            .social-links a {
                margin-right: 2vw;
            }
            .svg-inline--fa path {
                fill: #FBC3BC;
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
