import React from 'react';
import { css } from '@emotion/react';
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
                <h2>
                    <span className="about-font-span">Hi,</span><br /> I'm Lauren Hamann
                </h2>
                <Img fluid={file.childImageSharp.fluid} alt="family" />
                <FlowerBorder />
                <p> Professionally promote seamless initiatives vis-a-vis pandemic models. Seamlessly simplify process-centric experiences rather than 24/365 catalysts for change. Dramatically mesh cross-unit expertise for low-risk high-yield methodologies. Dramatically grow error-free core competencies and intermandated benefits. Globally drive business methods of empowerment vis-a-vis robust architectures.
                </p>
            </AboutPage>
        <MidAbout />
        </Layout>
    </>
        
)

export default About;