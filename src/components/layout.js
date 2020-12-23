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
            width: 100vw;
        }
        h1{
            font-family: 'Bad Script';
            font-size: 4em;
        }

        h2 {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 2em;
        }

        h3{
            font-family: 'modern';
            text-decoration: underline;
            font-size: 1.75em;
        }

        p{
            font-family: 'Lato';
            font-weight: 300;
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

        /* shadowing for sections*/

        .top-section {
            box-shadow: 0 2px 10px 0 rgba(75, 75, 75, 0.5);
        }

        .mid-section {
            box-shadow: 0 -1px 8px 0 #4b4b4b, 0 2px 8px 0 #4b4b4b;
        }

        .end-section {
            box-shadow: 0 -1px 8px 0 #4b4b4b;
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
        /* styling for preview blog-title + project-title*/
        .blog-title a,
        .project-title a,
        .title{
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
        .main-span{
            font-size: 0.70em;
        }
        /** aligning for author span in post page */
        .main {
            text-align: center;
        }

        .entry-body{
            padding-top: 3vh;
        }


        /* flex for entry */
        .entry-flex {
            padding-top: 5vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        .entry-flex .project-title {
            padding-bottom: 5vh;
        }

        .entry-flex p,
        .entry-flex h3 {
            padding-top: 3vh;
        }

        .entry-flex a{
            text-align: left;
            font-size: 0.75em;
            padding: 2.5vh;
        }

        /* index mid styles */
        .mid-li {
            color: #000;
            font-family: 'modern';
            font-size: 1.5em;
            text-align: left;
        }
        /* adding dashes before each li for quick facts */
        .mid-li:before {
            content: " - ";
        }
        
        /* special link styling for middle section on index page*/

        .special-link {
            padding-top: 3vh;
            color: #516684;
            font-family: 'lemonmilk';
            font-size: 0.85em;
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
        <section className="top-section">
            <Header />
        
            {children}
        </section>
    </>
);
export default Layout;
