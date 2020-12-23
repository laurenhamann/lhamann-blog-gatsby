import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import githublogo from '../images/logo_github-pink.png';
import twitterlogo from '../images/logo_twitter-pink.png';
import emaillogo from '../images/logo-email-pink.png';

const Footer = () => (
    <section className="end-section" css={css` display: flex; flex-direction: column; text-align: center;`}>
        <h1 css={css` font-size: 2em; margin: 3vh; `}>Want to say Hi?</h1>
        <h2 css={css` font-size: 1.5em; margin-bottom: 3vh; font-family: 'Lato'; font-weight: 200;`}> You can reach me at the links below</h2>
        <div className="social-links" css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;   
            margin-bottom: 3vh;     
        `}>
            <Link to="www.github.com"><img src={githublogo} alt="github link" /></Link>
            <Link to="www.twitter.com"><img src={twitterlogo} alt="twitter link" /></Link>
            <Link to="mailto:laurenhamann3@gmail.com"><img src={emaillogo} alt="email link" /></Link>
        </div>
    </section>
)

export default Footer;