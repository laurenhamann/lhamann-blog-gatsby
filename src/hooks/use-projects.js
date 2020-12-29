import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
    const projects = useStaticQuery(graphql`
    query projectQuery {
        allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
            nodes {
                frontmatter {
                slug
                title
                creator
                image {
                    img: childImageSharp {
                    fluid(maxHeight: 70, maxWidth: 60) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                }
                }
                excerpt(pruneLength: 50)
            }
            }
        }
    `)
    return projects.allMdx.nodes.map(project => ({
        title: project.frontmatter.title,
        creator: project.frontmatter.creator,
        slug: project.frontmatter.slug,
        image: project.frontmatter.image,
        excerpt: project.excerpt
    }))
}


export default useProjects;