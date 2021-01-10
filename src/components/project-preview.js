import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useProjects from '../hooks/use-projects';
import ReadLink from './read-link';
import ArticleStyle from './article-preview';

const ProjectPreview = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => (
        <ArticleStyle key={project.slug} className="project-preview-container"  alignself='center'>
                <Link to={project.slug}>
                    <Image
                        fluid={project.image.img.fluid} 
                        alt={project.title}
                    />
                </Link>
                <div className="article-div">
                    <h3 className="title">
                        <Link to={project.slug}>
                            {project.title}
                        </Link>
                    </h3>
                    <span className="author-span">{project.creator}</span>
                    <p>{project.excerpt}</p>
                    <ReadLink to={project.slug}>Read More &rarr;</ReadLink>
                </div>
        </ArticleStyle>
        ))
    return (
        allProjects
    )
}

export default ProjectPreview;


