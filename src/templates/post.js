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
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.author}</span>
        <MDXRenderer>{post.body}</MDXRenderer>
        <p>{post.frontmatter.body}</p>
        <Link to="/">&larr; back to all blog posts</Link>
    </Layout>
)

export default PostTemplate;