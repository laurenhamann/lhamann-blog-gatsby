import { graphql, useStaticQuery } from 'gatsby';

const useLogo = () => {
    const data = useStaticQuery(graphql`
        query logoQuery {
            file(relativePath: {eq: "lhamann-logo.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return data.file
}

export default useLogo;