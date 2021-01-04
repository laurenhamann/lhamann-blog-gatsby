import React from 'react';
import BlogPreview from '../components/blog-preview';
import ProjectPreview from '../components/project-preview';
import VerticalDivider from '../components/divider-vertical';
import { css } from '@emotion/react';
import PreviewLinks from './preview-links';


const PreviewHome = (props) => (
        <section css={css` min-height: 60vh;`}>
            <PreviewLinks className="flex-row w-80">
                <a href="/" className="selected page-links" id="blog" onClick={(e) => {props.displayChangeOnClick(e)}}>Blogs</a>
                <VerticalDivider height='51px' />
                <a href="/" className="page-links" id="project" onClick={(e) => {props.displayChangeOnClick(e)}}>Projects</a>
            </PreviewLinks>
            <div className="preview-container">
                {props.previewBlog ? <BlogPreview /> : <ProjectPreview />}
            </div>
        </section>
    )

export default PreviewHome;