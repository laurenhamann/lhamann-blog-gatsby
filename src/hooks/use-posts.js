import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "post"}}}) {
            nodes {
                frontmatter {
                author
                slug
                title
                date
                image {
                    sharp: childImageSharp {
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
    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        date: post.frontmatter.date,
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
        excerpt: post.excerpt
    }))
}

export default usePosts;