import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../components/header';
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
    <>
        <Layout />
        <section css={css` margin-top: 5vh; box-shadow: 0 -1px 8px 0 #4b4b4b, 0 2px 8px 0 #4b4b4b;`}>
            <div className="entry-flex">
                <h1 className="title main">
                    {project.frontmatter.title}
                </h1>
                <span className="author-span main-span">
                creator: {project.frontmatter.creator}</span>
                <MDXRenderer>{project.body}</MDXRenderer>
                <p className="entry-body">{project.frontmatter.body}</p>
                {/* possibly add state to change to projects displaying */}
                <Link to="/" className="load-link">&larr; back to all projects</Link>
            </div>
        </section>
    </>
)

export default ProjectTemplate;