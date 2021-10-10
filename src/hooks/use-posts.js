import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "post"}, published: {eq: true}}}) {
            nodes {
                frontmatter {
                    author
                    slug
                    title
                    datePublished
                    tags
                    hero_image_alt
                    hero_image {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, height: 200, width: 250)
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
        date: post.frontmatter.datePublished,
        slug: post.frontmatter.slug,
        excerpt: post.excerpt,
        tags: post.frontmatter.tags,
        hero_image: post.frontmatter.hero_image,
        hero_image_alt: post.frontmatter.hero_image_alt
    }))
}

export default usePosts;