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
                image {
                    sharp: childImageSharp {
                    fluid(maxHeight: 350, maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                }
                }
                excerpt
            }
            }
        }
    `)
    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
        excerpt: post.excerpt
    }))
}

export default usePosts;