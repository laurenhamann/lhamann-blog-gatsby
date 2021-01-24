import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
    const projects = useStaticQuery(graphql`
    query projectQuery {
        allMdx(filter: {frontmatter: {type: {eq: "project"}, published: {eq: true}}}) {
            nodes {
                frontmatter {
                slug
                title
                date
                codeUrl
                image {
                    img: childImageSharp {
                    fluid(maxHeight: 350, maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
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
        date: project.frontmatter.date,
        image: project.frontmatter.image,
        url: project.frontmatter.codeUrl
    }))
}


export default useProjects;