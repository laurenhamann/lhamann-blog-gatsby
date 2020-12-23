import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useProjects from '../hooks/use-projects';
import ReadLink from '../components/read-link';

const ProjectPreview = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => (
        <article key={project.slug} className="project-preview-container" 
                css={css`
                    border-bottom: 1px solid #ddd;
                    display: flex;
                    flex-direction: row;
                    margin-top: 0;
                    padding-bottom: 1rem;
                    width: 80vw;
                    margin-left: auto;
                    margin-right: auto;

                    :first-of-type {
                        margin-top: 1rem;
                    }
                `}
            >
            <Link to={project.slug} css={css`width: 200px;`}>
                <Image
                    fluid={project.image.img.fluid} 
                    alt={project.title}
                />
            </Link>
            <div css={css` align-self: center; text-align: center; display:flex; flex-direction:column;`}>
                <h3 className="title">
                    <Link to={project.slug}>
                        {project.title}
                    </Link>
                </h3>
                <span className="author-span">{project.creator}</span>
                <p>{project.excerpt}</p>
                <ReadLink to={project.slug} css={css`padding-top: 3px;`}>Read More &rarr;</ReadLink>
            </div>
        </article>
        ))
    return (
        allProjects
    )
}

export default ProjectPreview;


