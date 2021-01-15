import React from 'react';
import Layout from '../components/layout';
import FlowerBorder from '../components/flower-border';
import MidAbout from '../components/mid-about';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AboutPage from '../components/about-page';

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
            <AboutPage className="mid-section">
                <h3>
                    <span className="about-font-span">Hi,</span><br /> I'm Lauren Hamann
                </h3>
                <Img fluid={file.childImageSharp.fluid} alt="family" />
                <FlowerBorder />
                <h3>TL/DR</h3>
                <p> 
                    I am a Frontend Web Developer for 5 years. I love to code and solve difficult problems. Generally, I am a very creative person. I journal constantly and always look for new creative hobbies. I have two boys and a little girl. I am a stay at home mom and freelance developer currently looking for my first offical developer position.
                    <br />
                    I am using Gatsby for one of the first times, with a long-time knowledge of React. I enjoy all things Frontend but Javascript (and the frameworks using it) are some of my favorite aspects. 
                    <br />
                    My blogs will be an online journal of my problem-solving/struggles I have encountered, to look back on and hopefully help someone that is just starting out to not get discouraged. 
                </p>
            </AboutPage>
        <MidAbout />
        </Layout>
    </>
        
)

export default About;