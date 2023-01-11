import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Global/layout';
import TemplateStyle from '../components/Pages/Templates/template__style__';

const ProjectTemplate = ({ data: {mdx: project} }) => {
    const image = getImage(project.frontmatter.hero_image)
    const langs = project.frontmatter.languages.map((l) => (
        <p>{l}</p>
    ))
    return (
    <Layout>
        <hr />
        <TemplateStyle className="mid-section">
            <div className="article-flex flex-col">
                <h1 className="title main">
                    {project.frontmatter.title}
                </h1>
                <GatsbyImage
                    image={image}
                    alt={project.frontmatter.hero_image_alt}
                    className="image-project"
                    />
                <div className='langs'>{langs}</div>
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