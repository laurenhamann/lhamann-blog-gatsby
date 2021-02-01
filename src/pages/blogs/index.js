// /all-blogs/home
import React from 'react';
import Layout from '../../components/layout';
import usePosts from '../../hooks/use-posts';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ArticleStyle from '../../components/article-preview';
import GridStyle from '../../components/grid-style';

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
                <h4 className="title">
                    <Link to={post.slug}>
                        {post.title}
                    </Link>
                </h4>
                <span className="author-span">{post.author}~{post.date}</span>
                {/* {post.tags.map( tag => {
                    const path = `filter/${tag}`
                    return <Link to={path}><span className="tags">{tag}</span></Link>
                })} */}
                <p>{post.excerpt}</p>
                <Link to={post.slug}>Read This Post &rarr;</Link>
            </div>
        </ArticleStyle>  
    ))
    return (
        <Layout>
            <GridStyle className="mid-section">
                <div>
                    <h1> Search Blogs </h1>
                    <button className="filter" ariaLabel="filter-blogs">+</button>
                </div>
                <div className="grid-div">
                    {allPosts}
                </div>
            </GridStyle>
        </Layout>

    )
}

export default AllBlogs;
