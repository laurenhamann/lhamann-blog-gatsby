import React from 'react';
import FooterStyle from './footer-style';
import SocialIcon from './icon';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => ( 
        <FooterStyle className="end-section">
            <h1>Say Hello!</h1>
            <h2> You can reach me at the links below</h2>
            <div className="social-links">
                <SocialIcon url={'https://www.github.com'} label="Github" icon={faGithub} />
                <SocialIcon url={"https://www.twitter.com"} label="Twitter" icon={faTwitter} />
                <SocialIcon url={"https://www.gmail.com"} label="Email" icon={faEnvelope} />
            </div>
        </FooterStyle>
);

export default Footer;