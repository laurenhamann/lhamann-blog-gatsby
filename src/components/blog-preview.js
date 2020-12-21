import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';

const BlogPreview = ({ post }) =>  (
    <>
        <article className="blog-preview-container" 
            css={css`
                border-bottom: 1px solid #ddd;
                display: flex;
                flex-direction: row;
                margin-top: 0;
                padding-bottom: 1rem;
                width: 80vw;
                margin-left: auto;
                margin-right: auto;

                :first-of-type {
                    margin-top: 1rem;
                }
            `}
        >
            <Link to={post.slug} css={css`width: 200px;`}>
                <Image
                    fluid={post.image.childImageSharp.fluid} 
                    alt={post.title}
                />
            </Link>
            <div css={css` align-self: center; text-align: center; display:flex; flex-direction:column;`}>
                <h3 className="blog-title">
                    <Link to={post.slug}>
                        {post.title}
                    </Link>
                </h3>
                <span className="author-span">{post.author}</span>
                <p>{post.excerpt}</p>
                <ReadLink to={post.slug} css={css`padding-top: 3px;`}>Read This Post &rarr;</ReadLink>
            </div>
        </article>
    </>
);


export default BlogPreview;

