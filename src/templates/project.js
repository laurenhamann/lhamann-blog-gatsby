import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}){
            frontmatter {
                title
                creator
            }
            body
        }
    }
`;

const ProjectTemplate = ({ data: {mdx: project} }) => (
    <Layout>
        <section className="mid-section">
            <div className="article-flex">
                <h1 className="title main">
                    {project.frontmatter.title}
                </h1>
                <span className="author-span main-span">
                creator: {project.frontmatter.creator}</span>
                <MDXRenderer>{project.body}</MDXRenderer>
                <p className="article-body">{project.frontmatter.body}</p>
                {/* possibly add state to change to projects displaying */}
                <Link to="/" className="load-link">&larr; back to all projects</Link>
            </div>
        </section>
    </Layout>
)

export default ProjectTemplate;