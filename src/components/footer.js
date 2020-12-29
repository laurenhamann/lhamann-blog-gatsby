import React from 'react';
import { css } from '@emotion/react';
import SocialIcon from './icon';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => ( 
        <section className="end-section" css={css` display: flex; flex-direction: column; text-align: center;`}>
            <h1>Say Hello!</h1>
            <h2> You can reach me at the links below</h2>
            <div className="social-links" css={css`
                display: flex;
                flex-direction: row;
                justify-content: center;   
                margin-bottom: 3vh;     
            `}>
                <SocialIcon url={'https://www.github.com'} icon={faGithub} />
                <SocialIcon url={"https://www.twitter.com"} icon={faTwitter} />
                <SocialIcon url={"https://www.gmail.com"} icon={faEnvelope} />
            </div>
        </section>
);

export default Footer;