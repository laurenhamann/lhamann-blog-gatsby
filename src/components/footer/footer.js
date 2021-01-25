import React from 'react';
import SocialIcon from '../reusable/icon';
import SectionDivider from '../reusable/section-divider';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterStyle from './styles/footer-style';
const Footer = () => ( 
    <>
        <SectionDivider />
        <FooterStyle className="end-section">
            <h1 className="special">Say Hello!</h1>
            <span> You can reach me at the links below</span>
            <div className="social-links">
                <SocialIcon url={'https://www.github.com/laurenwallerdesigns'} label="Github" icon={faGithub} />
                <SocialIcon url={"https://www.twitter.com/"} label="Twitter" icon={faTwitter} />
                <SocialIcon url={"https://www.gmail.com"} label="Email" icon={faEnvelope} />
            </div>
        </FooterStyle>
    </>
);

export default Footer;