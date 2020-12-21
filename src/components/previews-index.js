import React from 'react';
import usePosts from '../hooks/use-posts';
import BlogPreview from '../components/blog-preview';
import ProjectPreview from '../components/project-preview';
import VerticalDivider from '../components/divider-vertical';


const PreviewHome = (props) => {
    const posts = usePosts();
    console.log(props);
    return (
        <>
            <div className="flex-row align-center w-80">
                <a href="/" className="selected page-links" id="blog" onClick={(e) => {props.displayChangeOnClick(e)}}>Blogs</a>
                <VerticalDivider />
                <a href="/" className="page-links" id="project" onClick={(e) => {props.displayChangeOnClick(e)}}>Projects</a>
            </div>
            <div className="preview-container">
                {props.previewBlog ? posts.map(post => (
                        <BlogPreview key={post.slug} post={post} />
                        )) : <ProjectPreview />}
            </div>
        </>
    )
}

export default PreviewHome;