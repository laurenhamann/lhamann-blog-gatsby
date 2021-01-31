import React from 'react';
import Layout from '../components/layout';
import SVGBorder from '../components/reusable/SVG-border';
import MidLinks from '../components/reusable/mid-link/mid-links'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AboutStyle from '../components/about/styles/about-style';
import SectionDivider from '../components/reusable/section-divider';

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

const About = ({ data: {file}}) => (
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
        
)

export default About;