import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';


export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}){
            frontmatter {
                title
                author
            }
            body
        }
    }
`;

const PostTemplate = ({ data: {mdx: post} }) => (
    <>
    <Layout />
        <section className="mid-section" css={css` margin-top: 5vh;`}>
            <div className="entry-flex">
                <h1 className="title main">{post.frontmatter.title}</h1>
                <span className="author-span main-span">author: {post.frontmatter.author}</span>
                <MDXRenderer>{post.body}</MDXRenderer>
                <p>{post.frontmatter.body}</p>
                <Link to="/" className="load-link">&larr; back to all blog posts</Link>
            </div>
        </section>
    </>
)

export default PostTemplate;