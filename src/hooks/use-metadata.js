import { graphql, useStaticQuery } from 'gatsby';


const useMetadata = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    description
                    title
                    url
                }
            }
        }
    `)
    return data.site;
}

export default useMetadata;