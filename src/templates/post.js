import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Global/layout'
import TemplateStyle from '../components/Pages/Templates/template__style__'
import SectionDivider from '../components/Global/section-divider__'


export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: { eq: $slug }}){
            frontmatter {
                title
                author
                datePublished
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`;



function PostTemplate({ data: {mdx: post} }) { 
    const image = getImage(post.frontmatter.hero_image)
    return (
    <Layout>
        <SectionDivider />
        <TemplateStyle>
            <GatsbyImage
                image={image}
                alt={post.frontmatter.hero_image_alt}
                />
            <h1 className="title main">{post.frontmatter.title}</h1>
            <span className="author-span">author: {post.frontmatter.author}~ {post.frontmatter.date}</span>
            <MDXRenderer>{post.body}</MDXRenderer>
            <p>{post.frontmatter.body}</p>
            <Link to="/" className="load-link"><span className="arrow-pink">&larr;</span> back to all blog posts</Link>
        </TemplateStyle>
    </Layout>
)}

export default PostTemplate;