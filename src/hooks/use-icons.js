import { graphql, useStaticQuery } from 'gatsby';

const useIcons = () => {
    const data = useStaticQuery(graphql`
        query iconQuery {
            allFile(filter: {relativeDirectory: {eq: "footer"}}) {
                nodes {
                    childImageSharp {
                        fluid {
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            originalImg
                            originalName
                            sizes
                        }
                    }
                }
            }
        }
    `)
    return data.allFile.nodes.map(file => ({
        image: file.childImageSharp.fluid
    }))
}

export default useIcons;