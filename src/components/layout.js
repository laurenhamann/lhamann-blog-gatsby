import React from "react";
import "fontsource-open-sans";
import { css, Global } from "@emotion/react";
import 'typeface-bad-script';
import 'typeface-lato';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global
        styles={css`
        @font-face {
            font-family: 'Bad Script';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src:
                local('Bad Script Regular '),
                local('Bad Script-Regular'),
                url('./files/bad-script-latin-400.woff2') format('woff2'), /* Super Modern Browsers */
                url('./files/bad-script-latin-400.woff') format('woff'); /* Modern Browsers */
        }
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
        * {
            box-sizing: border-box;
            margin: 0;
        }
        html,
        body {
            background-color: #516684;
        }
        section {
            background-color: #fbfafb;
        }
        h1{
            font-family: 'Bad Script';
            font-size: 32px;
        }
        a{
            font-family: 'Lemonmilk';
            font-weight: 300;
            font-size: 18px;
            text-decoration: none;
        }
        a:hover,
        a.selected {
            text-decoration: underline;
        }
         /*  index page project and blog links */
        .page-links{
            color: #516684;
        }
        /* Link color for nav-link and for the loading more button */
        .load-link,
        .nav-link{
            color:#db777c;
        }
        /*Global class for putting a container into flex-row styling */
        .flex-row {
            display:flex;
            flex-direction: row;
            justify-content: space-around;
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
        }
        .visible {
            transition: opacity 0.6s;
            opacity: 1;
        }
      `}
    />
    <section>
        <Header />
        {children}
    </section>
  </>
);
export default Layout;
