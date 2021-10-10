import React from 'react'
import useProjects from '../../hooks/use-projects'
import { Link } from 'gatsby';
import SectionDivider from '../styles/section-divider__';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from '../assets/icon';
import styled from '@emotion/styled'
import { clamps, flex, margin  } from '../styles/global'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    .grid-project {
        ${flex.flexRow}
        width: ${clamps.project_preview_width};
        ${flex.justifyCenter}
        ${margin.center}
    }
`
const ProjectStyle = styled('article')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    ${flex.alignItemsCenter}
    height: auto;
    width: ${clamps.project_preview_div_width};
    a:nth-child(2){
        width: 100%;
    }
    > * {
        margin-bottom: ${clamps.xs_margin};
        align-self: center;
    }
`
const ProjectSection = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => {
        const image = getImage(project.hero_image)
        return (
        <ProjectStyle key={project.slug} className="project-preview-container"  alignself='center'>
            <h3 className="title">
                <Link to={project.slug}>
                    {project.title}
                </Link>
            </h3>
            <Link to={project.slug}>
                <GatsbyImage
                    image={image}
                    alt={project.hero_image_alt}
                />
            </Link>
            <span className="small">{project.date}</span>
            <SocialIcon url={project.url} target="_blank" label="Github" icon={faGithub} />
            <Link to={project.slug} className="page-links">Read More &rarr;</Link>
        </ProjectStyle>
        )})
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