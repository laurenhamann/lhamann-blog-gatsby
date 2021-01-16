import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './read-link';
import usePost from '../hooks/use-posts';
import ArticleStyle from './article-preview-style';

const BlogPreview = () =>  {
    const posts = usePost();
    const allPosts = posts.map(post => (
            <ArticleStyle key={post.slug} className="blog-preview-container" alignself='center'>
                <Link to={post.slug}>
                    <Image
                        fluid={post.image.sharp.fluid} 
                        alt={post.title}
                    />
                </Link>
                <div className="article-div">
                    <h3 className="title">
                        <Link to={post.slug}>
                            {post.title}
                        </Link>
                    </h3>
                    <span className="author-span">{post.author}-{post.date}</span>
                    {/* <span className="tags">{post.tags}</span> */}
                    <p>{post.excerpt}</p>
                    <ReadLink to={post.slug}>Read This Post &rarr;</ReadLink>
                </div>
            </ArticleStyle>
        ))
    return (
        allPosts
    );
}


export default BlogPreview;

