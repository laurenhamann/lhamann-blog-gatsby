import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';
import usePost from '../hooks/use-posts';

const BlogPreview = () =>  {
    const posts = usePost();
    const allPosts = posts.map(post => (
            <article key={post.slug} className="blog-preview-container" 
                css={css`
                    border-bottom: 1px solid #ddd;
                    display: flex;
                    flex-direction: row;
                    margin-top: 0;
                    padding-top: 5vh;
                    padding-bottom: 1rem;
                    width: 80vw;
                    margin-left: auto;
                    margin-right: auto;

                    :first-of-type {
                        margin-top: 1rem;
                    }
                `}
            >
                <Link to={post.slug} css={css`width: 200px; padding-right: 1.5vh;`}>
                    <Image
                        fluid={post.image.sharp.fluid} 
                        alt={post.title}
                    />
                </Link>
                <div css={css` align-self: center; text-align: center; display:flex; flex-direction:column;`}>
                    <h3 className="title">
                        <Link to={post.slug}>
                            {post.title}
                        </Link>
                    </h3>
                    <span className="author-span">{post.author}</span>
                    <p>{post.excerpt}</p>
                    <ReadLink to={post.slug} css={css`padding-top: 3px;`}>Read This Post &rarr;</ReadLink>
                </div>
            </article>
        ))
    return (
        allPosts
    );
}


export default BlogPreview;

