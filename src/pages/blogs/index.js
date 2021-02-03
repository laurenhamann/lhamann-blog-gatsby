// /all-blogs/home
import React from 'react';
import Layout from '../../components/layout';
import usePosts from '../../hooks/use-posts';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import GridStyle from '../../components/reusable/grid/style/grid-style'
import AllBlogStyle from '../../components/template/styles/template-hub-style'
import SectionDivider from '../../components/reusable/section-divider'
const AllBlogs = () => {
    const posts = usePosts();
    const allPosts = posts.map(post => (
        <GridStyle key={post.slug} className="blog-preview-container" alignself='center'>
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
                <Link to={post.slug} className="small">Read This Post &rarr;</Link>
            </div>
        </GridStyle>  
    ))
    return (
        <Layout>
        <SectionDivider />
            <AllBlogStyle className="mid-section">
                    <button className="filter" ariaLabel="filter-blogs">+</button>
                    <h1> Search Blogs </h1>
                <div className="grid-div">
                    {allPosts}
                </div>
            </AllBlogStyle>
        </Layout>

    )
}

export default AllBlogs;
