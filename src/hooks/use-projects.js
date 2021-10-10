import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
    const projects = useStaticQuery(graphql`
    query projectQuery {
        allMdx(filter: {frontmatter: {type: {eq: "project"}, published: {eq: true}}}) {
            nodes {
                frontmatter {
                    slug
                    title
                    datePublished
                    codeUrl
                    hero_image_alt
                    hero_image {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, height: 200, width: 250)
                        }
                    }
                }
            }
        }
    }
`)
    return projects.allMdx.nodes.map(project => ({
        title: project.frontmatter.title,
        slug: project.frontmatter.slug,
        date: project.frontmatter.datePublished,
        url: project.frontmatter.codeUrl,
        path: project.frontmatter.image,
        hero_image: project.frontmatter.hero_image,
        hero_image_alt: project.frontmatter.hero_image_alt
    }))
}


export default useProjects;