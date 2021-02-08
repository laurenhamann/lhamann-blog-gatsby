import React from 'react';
import Layout from '../../components/layout';
import useProjects from '../../hooks/use-projects';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import GridStyle from '../../components/reusable/grid/style/grid-style'
import AllBlogStyle from '../../components/template/styles/template-hub-style'
const AllProjects = () => {
    const projects = useProjects();
    const allProjects = projects.map(project => (
        <AllBlogStyle key={project.slug} className="project-preview-container"  alignself='center'>
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
                    <Link to={project.slug}>Read More &rarr;</Link>
                </div>
        </AllBlogStyle>  
    ))
    return (
        <Layout>
            <GridStyle className="mid-section">
                <div>
                    <h1> Search Projects </h1>
                    <button className="filter" ariaLabel="filter-projects">+</button>
                </div>
                {allProjects}
            </GridStyle>
        </Layout>

    )
}

export default AllProjects;