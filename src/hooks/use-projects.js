import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
    const projects = useStaticQuery(graphql`
    query projectQuery {
        allMdx(filter: {frontmatter: {type: {eq: "project"}, published: {eq: true}}}) {
            nodes {
                frontmatter {
                slug
                title
                creator
                date
                image {
                    img: childImageSharp {
                    fluid(maxHeight: 350, maxWidth: 400) {
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
        date: project.frontmatter.date,
        image: project.frontmatter.image,
        excerpt: project.excerpt
    }))
}


export default useProjects;