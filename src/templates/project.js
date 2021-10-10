import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/components/layout';
import TemplateStyle from '../components/styles/template__style__';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectTemplate = ({ data: {mdx: project} }) => {
    const image = getImage(project.frontmatter.hero_image)
    return (
    <Layout>
        <TemplateStyle className="mid-section">
            <div className="article-flex flex-col">
                <h1 className="title main">
                    {project.frontmatter.title}
                </h1>
                <GatsbyImage
                    image={image}
                    alt={project.frontmatter.hero_image_alt}
                    />
                <span className="author-span main-span">
                creator: {project.frontmatter.creator}~{project.frontmatter.date}</span>
                    <MDXRenderer>{project.body}
                    </MDXRenderer>
                <p>{project.frontmatter.body}</p>
                {/* possibly add state to change to projects displaying */}
                <Link to="/" className="load-link"><span className="arrow-pink">&larr;</span> back to all projects</Link>
            </div>
        </TemplateStyle>
    </Layout>
)}

export default ProjectTemplate;

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}){
            frontmatter {
                title
                creator
                datePublished
                languages
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`;