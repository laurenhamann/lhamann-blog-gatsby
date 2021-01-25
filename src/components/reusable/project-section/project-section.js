import React from 'react'
import useProjects from '../../../hooks/use-projects'
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import SectionDivider from '../section-divider';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from '../icon';
import ProjectSectionStyle from './styles/project-section-style'
import ProjectStyle from './styles/project-style';

const ProjectSection = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => (
        <ProjectStyle key={project.slug} className="project-preview-container"  alignself='center'>
            <h3 className="title">
                <Link to={project.slug}>
                    {project.title}
                </Link>
            </h3>
            <Link to={project.slug}>
                <Image
                    fluid={project.image.img.fluid} 
                    alt={project.title}
                />
            </Link>
            <span className="small">{project.date}</span>
            <SocialIcon url={project.url} target="_blank" label="Github" icon={faGithub} />
            <Link to={project.slug} className="page-links">Read More &rarr;</Link>
        </ProjectStyle>
        ))
    return (
        <>
        <SectionDivider />
        <ProjectSectionStyle>
            <h1>Projects</h1>
            <div className="grid-project">
                {allProjects}
            </div>
            <Link to="projects" className="large-link">All Projects</Link>
        </ProjectSectionStyle>
        </>
    )
}

export default ProjectSection;