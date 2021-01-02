import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { css } from '@emotion/react';

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
        <section className="mid-section">
            <article className="article-flex flex-col">
                <h1 className="title main">{post.frontmatter.title}</h1>
                <span className="author-span" css={css` font-size: 0.70em;`}>author: {post.frontmatter.author}</span>
                <MDXRenderer>{post.body}</MDXRenderer>
                <p>{post.frontmatter.body}</p>
                <Link to="/" className="load-link">&larr; back to all blog posts</Link>
            </article>
        </section>
    </Layout>
)

export default PostTemplate;