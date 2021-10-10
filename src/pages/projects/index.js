import React from 'react';
import Layout from '../../components/components/layout';
import useProjects from '../../hooks/use-projects';
import { Link } from 'gatsby';
import GridStyle from '../../components/styles/grid__style__'
import HubStyle from '../../components/styles/template_hub__style__'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AllProjects = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => {
        const image = getImage(project.frontmatter.hero_image)
        return (
        <GridStyle key={project.slug} className="project-preview-container"  alignself='center'>
                <Link to={project.slug}>
                <GatsbyImage
                    image={image}
                    alt={project.frontmatter.hero_image_alt}
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
                    <Link to={project.slug}>Read More &rarr;</Link>
                </div>
        </GridStyle>  
    )})

    return (
        <Layout>
            <HubStyle className="mid-section">
                <div>
                    <h1> Search Projects </h1>
                    <button className="filter" ariaLabel="filter-projects">+</button>
                </div>
                {allProjects}
            </HubStyle>
        </Layout>

    )
}

export default AllProjects;