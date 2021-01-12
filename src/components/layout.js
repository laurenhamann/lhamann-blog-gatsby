import React from "react";
import { css, Global } from "@emotion/react";
import 'typeface-lato';
import 'typeface-raleway';
import 'typeface-montserrat-alternates';
import 'typeface-source-code-pro';
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
            /* raleway-100normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 100;
                src:
                    local('Raleway Thin '),
                    local('Raleway-Thin'),
                    url('./files/raleway-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-100.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-100italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 100;
                src:
                    local('Raleway Thin italic'),
                    local('Raleway-Thinitalic'),
                    url('./files/raleway-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-100italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-200normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 200;
                src:
                    local('Raleway Extra Light '),
                    local('Raleway-Extra Light'),
                    url('./files/raleway-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-200.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-200italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 200;
                src:
                    local('Raleway Extra Light italic'),
                    local('Raleway-Extra Lightitalic'),
                    url('./files/raleway-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-200italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-300normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 300;
                src:
                    local('Raleway Light '),
                    local('Raleway-Light'),
                    url('./files/raleway-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-300.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-300italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 300;
                src:
                    local('Raleway Light italic'),
                    local('Raleway-Lightitalic'),
                    url('./files/raleway-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-300italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-400normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src:
                    local('Raleway Regular '),
                    local('Raleway-Regular'),
                    url('./files/raleway-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-400.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-400italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 400;
                src:
                    local('Raleway Regular italic'),
                    local('Raleway-Regularitalic'),
                    url('./files/raleway-latin-400italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-400italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-500normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 500;
                src:
                    local('Raleway Medium '),
                    local('Raleway-Medium'),
                    url('./files/raleway-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-500.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-500italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 500;
                src:
                    local('Raleway Medium italic'),
                    local('Raleway-Mediumitalic'),
                    url('./files/raleway-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-500italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-600normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 600;
                src:
                    local('Raleway SemiBold '),
                    local('Raleway-SemiBold'),
                    url('./files/raleway-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-600.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-600italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 600;
                src:
                    local('Raleway SemiBold italic'),
                    local('Raleway-SemiBolditalic'),
                    url('./files/raleway-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-600italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-700normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 700;
                src:
                    local('Raleway Bold '),
                    local('Raleway-Bold'),
                    url('./files/raleway-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-700.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-700italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 700;
                src:
                    local('Raleway Bold italic'),
                    local('Raleway-Bolditalic'),
                    url('./files/raleway-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-700italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-800normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 800;
                src:
                    local('Raleway ExtraBold '),
                    local('Raleway-ExtraBold'),
                    url('./files/raleway-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-800.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-800italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 800;
                src:
                    local('Raleway ExtraBold italic'),
                    local('Raleway-ExtraBolditalic'),
                    url('./files/raleway-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-800italic.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-900normal - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 900;
                src:
                    local('Raleway Black '),
                    local('Raleway-Black'),
                    url('./files/raleway-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-900.woff') format('woff'); /* Modern Browsers */
            }

            /* raleway-900italic - latin */
            @font-face {
                font-family: 'Raleway';
                font-style: italic;
                font-display: swap;
                font-weight: 900;
                src:
                    local('Raleway Black italic'),
                    local('Raleway-Blackitalic'),
                    url('./files/raleway-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/raleway-latin-900italic.woff') format('woff'); /* Modern Browsers */
            }
            @font-face {
                font-family: 'Montserrat Alternates';
                font-style: italic;
                font-display: swap;
                font-weight: 200;
                src:
                    local('Montserrat Alternates Extra Light italic'),
                    local('Montserrat Alternates-Extra Lightitalic'),
                    url('./files/montserrat-alternates-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/montserrat-alternates-latin-200italic.woff') format('woff'); /* Modern Browsers */
            }
            /* source-code-pro-500normal - latin */
            @font-face {
                font-family: 'Source Code Pro';
                font-style: normal;
                font-display: swap;
                font-weight: 500;
                src:
                    local('Source Code Pro Medium '),
                    local('Source Code Pro-Medium'),
                    url('./files/source-code-pro-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
                    url('./files/source-code-pro-latin-500.woff') format('woff'); /* Modern Browsers */
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
                font-family: 'Lato';
                font-weight: 300;
                font-size: 4.5vmax;
                margin: 2vh;
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
                font-weight: 200;
                font-size: 3vmax;
                margin: 1vh 1vw 2vh 1vw;
                ${mq[0]}{
                    font-size: 3vmax;
                }
                ${mq[1]}{
                    font-size: 2vmax;
                }

            }

            h3{
                font-family: 'Lato';
                font-weight: 400;
                text-decoration: underline;
                font-size: 3vmax;
                ${mq[1]}{
                    font-size: 1.9vmax;
                }
            }

            h4{
                font-family: 'Montserrat Alternates';
                font-weight: 200;
                font-style: italic;
                font-size: 2.6vmax;
                ${mq[1]}{
                    font-size: 1.7vmax;
                }
            }

            p{
                font-family: 'Raleway';
                font-weight: 300;
                font-size: 2.3vmax;
                ${mq[0]}{
                    font-size: 1.9vmax;
                }
                ${mq[1]}{
                    font-size: 1.5vmax;
                }
            }
            a{
                font-family: 'Raleway';
                font-weight: 600;
                text-transform: capitalize;
                font-size: 1.7vmax;
                text-decoration: none;
                height: auto;
                ${mq[1]}{
                    font-size: 1.3vmax;
                }
            }
            a:hover {
                text-decoration: underline;
            }

            .author-span {
                font-size: 1.2vmax;
                ${mq[0]}{
                    font-size: 1.3vmax;
                }
                ${mq[1]}{
                    font-size: 1vmax;
                }
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
