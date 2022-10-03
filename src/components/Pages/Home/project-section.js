import React from 'react'
import { Link } from 'gatsby';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useProjects from '../../../hooks/use-projects'
import SectionDivider from '../../Global/section-divider__';
import SocialIcon from '../../../assets/icon';
import { clamps, flex } from '../../Global/Styles/__global'

const ProjectSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    div {
        ${flex.flexRow}
        ${flex.justifyCenter}
        flex-wrap: wrap;
    }
`
const ProjectStyle = styled('article')`
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    ${flex.justifyCenter}
    margin-bottom: ${clamps.med_margin};
    width: 30vw;
    > a {
        width: ${clamps.blog_image_div_width};
        box-shadow: 0px 3px 4px #0000004d;
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