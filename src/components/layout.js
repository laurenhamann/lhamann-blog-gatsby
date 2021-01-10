import React from "react";
import { css, Global } from "@emotion/react";
import 'typeface-lato';
import Header from './header';
import Footer from './footer';
import '../static/fonts/fonts.css';
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
                url('./files/lato-latin-300.woff2') format('woff2'), 
                url('./files/lato-latin-300.woff') format('woff'); 
            }

            @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-display: swap;
            font-weight: 300;
            src:
                local('Lato Light italic'),
                local('Lato-Lightitalic'),
                url('./files/lato-latin-300italic.woff2') format('woff2'), 
                url('./files/lato-latin-300italic.woff') format('woff'); 
            }

            @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:
                local('Lato Regular '),
                local('Lato-Regular'),
                url('./files/lato-latin-400.woff2') format('woff2'),
                url('./files/lato-latin-400.woff') format('woff'); 
            }

            @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-display: swap;
            font-weight: 400;
            src:
                local('Lato Regular italic'),
                local('Lato-Regularitalic'),
                url('./files/lato-latin-400italic.woff2') format('woff2'), 
                url('./files/lato-latin-400italic.woff') format('woff'); 
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
                font-family: 'modern';
                font-size: 4vmax;
                margin: 2vh 0;
                ${mq[1]} {
                    font-size: 2.9em;
                }
                ${mq[2]} {
                    font-size: 3.5em;
                }
                ${mq[3]} {
                    font-size: 4em;
                }
            }

            .special {
                font-family: 'joselyna';
                font-size: 10vmax;
                margin: 2vh 0;

                ${mq[1]}{
                    font-size: 8vmax;
                }
            }

            h2 {
                font-family: 'Lato';
                font-weight: 300;
                font-size: 3.4vmax;
                margin: 1vh 1vw 2vh 1vw;

            }

            h3{
                font-family: 'Lato';
                font-weight: 400;
                text-decoration: underline;
                font-size: 3vmax;
            }

            h4{
                font-family: 'Lato';
                font-weight: 200;
                font-style: italic;
                font-size: 2.6vmax;
            }

            p{
                font-family: 'Lato';
                font-weight: 300;
                font-size: 2.3vmax;
            }
            a{
                font-family: 'Lemonmilk';
                font-weight: 300;
                font-size: 1.7vmax;
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
