import React from 'react';
import useProjects from '../../hooks/use-projects';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Global/layout';
import GridStyle from '../../components/Pages/Hub/grid__style__'
import HubStyle from '../../components/Pages/Hub/template_hub__style__'
import SectionDivider from '../../components/Global/section-divider__';

const AllProjects = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => {
        const image = getImage(project.hero_image)
        return (
        <GridStyle key={project.slug} className="project-preview-container"  alignself='center'>
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
                <span className="author-span">{project.creator}</span>
                <p>{project.excerpt}</p>
                <Link to={project.slug}>View &rarr;</Link>
            </div>
        </GridStyle>  
    )})

    return (
        <Layout>
            <SectionDivider />
            <HubStyle className="mid-section">
                <div className="grid-div">
                    {allProjects}
                </div>
            </HubStyle>
        </Layout>

    )
}

export default AllProjects;