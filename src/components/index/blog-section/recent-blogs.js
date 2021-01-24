import React from 'react';
import SectionDivider from '../../reusable/section-divider';
import usePost from '../../../hooks/use-posts';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import RecentBlogsStyle from './styles/recent-blog-style';
import PreviewStyle from './styles/preview-style';

const RecentBlogs = () => {
    const posts = usePost();
    const allPosts = posts.map(post => (
            <PreviewStyle key={post.slug} className="blog-preview-container" alignself='center'>
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
                    <span className="small">{post.author}-{post.date}</span>
                    {/* <span className="tags">{post.tags}</span> */}
                    <p>{post.excerpt}</p>
                    <Link to={post.slug} className="page-links">Read This Post &rarr;</Link>
                </div>
            </PreviewStyle>
        ))
    return (
        <>
            <SectionDivider />
            <RecentBlogsStyle>
                <h1>Recent Blogs</h1>
                {allPosts}
                <Link to="blogs" className="large-link">All Blogs</Link>
            </RecentBlogsStyle>
        </>
    );
}

export default RecentBlogs;