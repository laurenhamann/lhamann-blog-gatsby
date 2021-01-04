import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ArticleStyle from '../components/preview-article';
import ReadLink from '../components/read-link';
import GridStyle from '../components/grid-style';

const AllBlogs = () => {
    const posts = usePosts();
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
                <span className="author-span">{post.author}</span>
                <p>{post.excerpt}</p>
                <ReadLink to={post.slug}>Read This Post &rarr;</ReadLink>
            </div>
        </ArticleStyle>  
    ))
    return (
        <Layout>
            <GridStyle className="mid-section">
                <h1> Search Blogs </h1>
                <button className="filter" ariaLabel="filter-blogs">+</button>
                {allPosts}
            </GridStyle>
        </Layout>

    )
}

export default AllBlogs;
