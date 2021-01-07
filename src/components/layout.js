import React from "react";
import { css, Global } from "@emotion/react";
import 'typeface-lato';
import Header from './header';
import Footer from './footer';
// add breakpoint mapping 
//possibly flowers or maybe a hover effect on computers that create a moving border
//760 fonts
//1024 & < fonts and spacing
// const pink = '#FBC3BC';
const navy = '#516684';
// const grey = '#a2aebf';
// const dkPink = '#db777c';
// const black = '#000';
const white = '#fbfafb';
const Layout = ({ children }) => {
    const breakpoints = [768, 1024, 1400, 1600]
    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )
    return (
        <>
        <Global
            styles={css`
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
                background-color: ${navy};
                max-width: 100vw;
            }
        /** seperation of the sections from the background color */
            section {
                background-color: ${white};
                width: 100vw;
            }

        
            h1{
                font-family: 'joselyna';
                font-size: 4em;
                margin: 2vh 0;
                ${mq[0]} {
                    font-size: 5em;
                }
                ${mq[1]} {
                    font-size: 5.3em;
                }
            }

            h2 {
                font-family: 'Lato';
                font-weight: 200;
                font-size: 1.4em;
                margin-bottom: 2vh;
            }

            h3{
                font-family: 'Modern';
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
                ${'' /* ${mq[0]} {
                    font-size: 1.5em;
                } */}
                ${mq[1]} {
                    font-size: 1.8em;
                }
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
    /**************************** //END// Universal ***************************/
    /**************************** HEADER ***************************/
            .top-section {
                box-shadow: 0 2px 10px 0 rgba(75, 75, 75, 0.5);
            }

    /**************************** //END// HEADER ***************************/
    /**************************** MIDDLE SECTIONS ***************************/
            .mid-section {
                box-shadow: 0 -1px 8px 0 #4b4b4b, 0 2px 8px 0 #4b4b4b;
                margin: 5vh 0;
                ${mq[3]} {
                    margin: 8vh 0;
                }
            }
            
    /************************* //END// MIDDLE SECTION **************************/
    /************************* FOOTER **************************/
            .end-section {
                box-shadow: 0 -1px 8px 0 #4b4b4b;
            }
    /************************* //END// FOOTER **************************/
            /** about middle styles */

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
