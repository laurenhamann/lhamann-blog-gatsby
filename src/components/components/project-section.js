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
    div {
        ${flex.flexRow}
        ${flex.justifyCenter}
    }
`
const ProjectStyle = styled('article')`
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    ${flex.justifyCenter}
    width: 30vw;
    > a {
        width: ${clamps.blog_image_div_width};
    }
    .article-div {
        ${flex.flexCol}
        width: 30vw;
        > * {
            margin-bottom: ${clamps.xs_margin};
            text-align: center !important;
            margin-left: 10px;
        }
    }
`

const grid = styled('div')`
    ${flex.flexRow}
`
const ProjectSection = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => {
        const image = getImage(project.hero_image)
        return (
        <ProjectStyle key={project.slug} className="project-preview-container"  alignself='center'>
            <Link to={project.slug}>
                <GatsbyImage
                    image={image}
                    alt={project.hero_image_alt}
                />
            </Link>
            <div className="article-div">
            <h3 className="title">
                <Link to={project.slug}>
                    {project.title}
                </Link>
            </h3>
            <span className="small">{project.date}</span>
            <SocialIcon url={project.url} target="_blank" label="Github" icon={faGithub} />
            <Link to={project.slug} className="page-links">Read More &rarr;</Link>
            </div>
        </ProjectStyle>
        )})
    return (
        <>
        <SectionDivider />
            <h1>Projects</h1>
            <ProjectSectionStyle>
                <div>
                    {allProjects}
                </div>
            <Link to="projects" className="large-link">All Projects</Link>
            </ProjectSectionStyle>
        </>
    )
}

export default ProjectSection;