import React from 'react';
import styled from '@emotion/styled'
import SocialIcon from '../assets/icon';
import SectionDivider from '../styles/section-divider__';
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { clamps, colors, flex } from '../styles/global';

const FooterStyle = styled('footer')`
    ${flex.flexCol}
    margin-bottom: ${clamps.margin_bottom};
    h1{
        margin-bottom: ${clamps.xs_margin};
    }
    & > span {
        font-size: ${clamps.p_size};
        font-family: "Elsie Swash Caps";
        color: ${colors.main_bold};
        text-align: center;
        margin-bottom: ${clamps.med_margin};
    }
    .social-links {
        color: ${colors.accent};
        align-self: center;
        font-size: ${clamps.anchor_size};
        a{
        margin-left: ${clamps.xs_margin};
        margin-right: ${clamps.xs_margin};
        }
    }
`

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