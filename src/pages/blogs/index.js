// /all-blogs/home
import React, { useState} from 'react';
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/components/Global/layout'
import GridStyle from '../../components/components/Pages/Hub/grid__style__'
import HubStyle from '../../components/components/Pages/Hub/template_hub__style__'
import SectionDivider from '../../components/components/Global/section-divider__'

const AllBlogs = ({data}) => {
    let checkedOptions = ["React"];
    let categories = [];
    const allPosts =  
        data.allPosts.nodes.map(post => {
            post.frontmatter.tags.forEach( tag => {
                categories.push(tag);
            })
        const image = getImage(post.frontmatter.hero_image)
            return(
                <GridStyle key={post.frontmatter.slug} className="blog-preview-container" alignself='center'>
                    <Link to={post.slug}>
                        <GatsbyImage
                            image={image}
                            alt={post.frontmatter.hero_image_alt}
                        />
                    </Link>
                    <div className="article-div">
                        <h4 className="title">
                            <Link to={post.frontmatter.slug}>
                                {post.frontmatter.title}
                            </Link>
                        </h4>
                        <span className="author-span">
                            {post.frontmatter.author}~{post.frontmatter.date}
                        </span>
                        <br />
                        <div className="tags">
                            {
                                post.frontmatter.tags.map( tag => (
                                    <span className="tags">{tag}</span>
                                ))
                            }
                        </div>
                        <p>{post.excerpt}</p>
                        <Link to={post.frontmatter.slug} className="small">
                            Read This Post &rarr;
                        </Link>
                    </div>
            </GridStyle>
        )
    })

const [open, isOpen] = useState(false);
const filterOnClick = (id) => {
    const checked = document.getElementById(id);
    if(checked.checked === true) {
        checkedOptions.push(id);
    } else {
        checkedOptions.pop(id);
    }
    // filteredCategories.push(checkedOptions);
    // console.log(filteredCategories, checked, "clicked");
    console.log('clicked', id)
    console.log(checkedOptions);
}
    return (
        <Layout>
        <div css={css` position: relative; `}>
            <SectionDivider />
                <HubStyle className="mid-section">
                        {/* <FilterOptions open={open} click={isOpen} categories={categories} filterCheck={filterOnClick} /> */}
                        <h1> Search Blogs </h1>
                    <div className="grid-div">
                        {allPosts}
                    </div>
                </HubStyle>
        </div>
        </Layout>
    )
}

export default AllBlogs;


export const query = graphql`
    query {
        allPosts: allMdx(filter: {frontmatter: {type: {eq: "post"}, published: {eq: true}}}) {
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
                            gatsbyImageData
                        }
                    }
                }
                excerpt(pruneLength: 50)
            }
        }
    }
`;