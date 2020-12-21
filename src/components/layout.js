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
            font-size: 4em;
        }

        h2 {
            font-size: 2em;
        }

        h3{
            font-size: 1.75em;
        }
        a{
            font-family: 'Lemonmilk';
            font-weight: 300;
            font-size: 18px;
            text-decoration: none;
            height: auto;
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
        }
        /* styling for preview blog-title*/
        .blog-title a{
            color: #000;
            font-family: 'modern';
            cursor:pointer;
            text-align:center;
        }
        /** styling for author span  */
        .author-span{
            color: #a2aebf;
            font-family: lato;
            font-size: 0.50em;
        }  

       /* Figure out img styling */
        .align-ends{
            justify-content: space-between;
            align-items: center;
        }
        .align-center{
            align-items: center;
            justify-content: space-around;
        }

        .w-80{
            width: 80vw;
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
        .selected li{
            color: #db777c;
        }
        li{
            color: #fbc3bc;
            list-style: none;
            text-shadow: 0px 2px 1px #C0C0C0;
            padding-bottom: 1vh;
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
