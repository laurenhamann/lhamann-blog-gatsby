import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { clamps, margin, flex} from '../../Global/Styles/__global'
import SectionDivider from '../../Global/section-divider__';
import usePost from '../../../../hooks/use-posts';

const RecentBlogsStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    article:last-child,
    .page-links {
        margin-bottom: ${clamps.margin_bottom};
    }
`

const PreviewStyle = styled('article')`
    ${flex.flexRow}
    ${flex.alignItemsCenter}
    ${flex.justifyCenter}
    ${margin.center}
    width: ${clamps.blog_preview_width};
    > a {
        width: ${clamps.blog_image_div_width};
        margin-right: ${clamps.margin_right};
    }
    .article-div {
        ${flex.flexCol}
        width: ${clamps.article_div_width};
        > * {
            margin-bottom: ${clamps.xs_margin};
            text-align: left !important;
            margin-left: 10px;
        }
    }
`

const RecentBlogs = () => {
    const posts = usePost();
const allPosts = posts.map(post => {
    const image = getImage(post.hero_image)
    return (
        <PreviewStyle key={post.slug} className="blog-preview-container" alignself='center'>
            <Link to={post.slug}>
                <GatsbyImage
                    image={image}
                    alt={post.hero_image_alt}
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
    )})
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