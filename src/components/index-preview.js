import React from 'react';
import BlogPreview from './blog-preview';
import ProjectPreview from './project-preview';
import VerticalDivider from './divider-vertical';
import { css } from '@emotion/react';
import PreviewLinks from './links-preview-index';


const PreviewHome = (props) => (
        <section css={css` min-height: 60vh; margin-top: 0; width: 100vw;`}>
            <PreviewLinks className="flex-row">
                <a href="/" className="selected page-links" id="blog" onClick={(e) => {props.displayChangeOnClick(e)}}>Blogs</a>
                <VerticalDivider height='30px' />
                <a href="/" className="page-links" id="project" onClick={(e) => {props.displayChangeOnClick(e)}}>Projects</a>
            </PreviewLinks>
            <div className="preview-container" css={css` width: 80%; margin: 0 auto;`}>
                {props.previewBlog ? <BlogPreview /> : <ProjectPreview />}
            </div>
        </section>
    )

export default PreviewHome;