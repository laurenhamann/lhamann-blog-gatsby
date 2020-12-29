import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import FlowerBorder from '../components/flower-border';
import MidAbout from '../components/mid-about';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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
        <Layout active="about">
            <section css={css`
                padding: 5vh;
                width: 100vw;
                display: flex;
                flex-direction: column;
                align-items: center;
            `} className="mid-section">
                <h2 css={css`
                    font-size: 1.8em;
                `}>
                    <span css={css `
                        font-size: 2.5em;
                        font-family: 'Lato';
                        font-weight: 200;
                        align-self: flex-start;
                        margin-left: -5vw;
                    `} className="about-font-span">Hi,</span><br /> I'm Lauren Hamann
                </h2>
                <Img fluid={file.childImageSharp.fluid} alt="family" 
                    css={css`
                    border-radius: 50%;
                    height:250px;
                    width: 300px;
                    margin: 3vh auto;
                    `}
                />
                <FlowerBorder />
                <p css={css` text-align: left; width: 75vw; align-item: flex-start;`}> Professionally promote seamless initiatives vis-a-vis pandemic models. Seamlessly simplify process-centric experiences rather than 24/365 catalysts for change. Dramatically mesh cross-unit expertise for low-risk high-yield methodologies. Dramatically grow error-free core competencies and intermandated benefits. Globally drive business methods of empowerment vis-a-vis robust architectures.</p>
            </section>
        <MidAbout />
        </Layout>
    </>
        
)

export default About;