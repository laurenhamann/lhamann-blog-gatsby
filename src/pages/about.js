import React from 'react';
import styled from '@emotion/styled'
import Layout from '../components/components/layout';
import SVGBorder from '../components/assets/svg/SVG-border';
import MidLinks from '../components/components/mid-links'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionDivider from '../components/styles/section-divider__';
import { clamps, margin, flex, animation  } from '../components/styles/global'

const AboutStyle = styled('div')`
    ${animation.strokeChange}
    ${margin.center}
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
    width: ${clamps.header_width};
    .svg-border {
            width: ${clamps.full_size_image};
            ${margin.center}
        svg{
            #Line-4 {
                animation: 
                    strokeChange 2s forwards infinite,
                    dash 9s 4s 1 forwards;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
            }
        }
    }
    .about-title {
        ${flex.flexCol}
        width:${clamps.about_title_width};
        padding: 0 ${clamps.med_margin};
        ${margin.center}
    }
    .about-font-span {
        animation: colorChange 4s forwards infinite;
        align-self: flex-start;
    }
    & .gatsby-image-wrapper {
        border-radius: 50%;
        height: ${clamps.full_size_image};
        width: ${clamps.full_size_image};
        margin: 3vh auto;
    }

    p {
        width: ${clamps.article_width};
        ${margin.center}
    }
`
export const query = graphql`
    query imageQuery {
        file(relativePath: {eq: "about-picture.JPG"}) {
            childImageSharp {
                fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    sizes
                    src
                    aspectRatio
                }
            }
        }
    }
`;

const About = ({ data: {file}}) => {
    return (
    <>
        <Layout>
            <SectionDivider />
            <AboutStyle>
                <div className="about-title">
                    <span className="about-font-span">Hi,</span>
                    <h2>
                        I'm Lauren Hamann
                    </h2>
                </div>
                <Img fluid={file.childImageSharp.fluid} alt="family" />
                <SVGBorder />
                <p> 
                    I am a Frontend Web Developer for 5 years. I love to code and solve difficult problems. Generally, I am a very creative person. I journal constantly and always look for new creative hobbies. I have two boys and a little girl. I am a stay at home mom and freelance developer currently looking for my first offical developer position.
                    <br />
                    I am using Gatsby for one of the first times, with a long-time knowledge of React. I enjoy all things Frontend but Javascript (and the frameworks using it) are some of my favorite aspects. 
                    <br />
                    My blogs will be an online journal of my problem-solving/struggles I have encountered, to look back on and hopefully help someone that is just starting out to not get discouraged. 
                </p>
            </AboutStyle>
        <MidLinks />
        </Layout>
    </>
        
)}

export default About;