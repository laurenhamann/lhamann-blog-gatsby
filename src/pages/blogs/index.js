// /all-blogs/home
import React, { useState } from 'react';
import Layout from '../../components/layout'
//import usePosts from '../../hooks/use-posts'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import GridStyle from '../../components/reusable/grid/style/grid-style'
import AllBlogStyle from '../../components/template/styles/template-hub-style'
import SectionDivider from '../../components/reusable/section-divider'
import FilterOptions from '../../components/template/filter/filter-options'
import { css } from '@emotion/react'

const AllBlogs = ({data}) => {
    let categories = [];
    const allPosts = data.allMdx.nodes.map(post => {
        post.frontmatter.tags.forEach( tag => {
            categories.push(tag);
        })
        return (
            <GridStyle key={post.frontmatter.slug} className="blog-preview-container" alignself='center'>
                <Link to={post.frontmatter.slug}>
                    <Image
                        fluid={post.frontmatter.image.sharp.fluid} 
                        alt={post.frontmatter.title}
                    />
                </Link>
                <div className="article-div">
                    <h4 className="title">
                        <Link to={post.frontmatter.slug}>
                            {post.frontmatter.title}
                        </Link>
                    </h4>
                    <span className="author-span">{post.frontmatter.author}~{post.frontmatter.date}</span>
                    {/* {post.tags.map( tag => {
                        const path = `filter/${tag}`
                        return <Link to={path}><span className="tags">{tag}</span></Link>
                    })} */}
                    <p>{post.excerpt}</p>
                    <Link to={post.frontmatter.slug} className="small">Read This Post &rarr;</Link>
                </div>
            </GridStyle>  
        )})

        const [open, isOpen] = useState(false);
        return (
            <Layout>
            <div css={css` position: relative; `}>
                <SectionDivider />
                    <AllBlogStyle className="mid-section">
                            <FilterOptions open={open} click={isOpen} categories={categories} />
                            <h1> Search Blogs </h1>
                        <div className="grid-div">
                            {allPosts}
                        </div>
                    </AllBlogStyle>
            </div>
            </Layout>

        )
        }

export default AllBlogs;


export const query = graphql`
    query postQuery {
        allMdx(filter: {frontmatter: {type: {eq: "post"}, published: {eq: true}}}) {
            nodes {
                frontmatter {
                author
                slug
                title
                date
                tags
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
`;