import { graphql, useStaticQuery } from 'gatsby';

const useHeroImage = () => {
    const data = useStaticQuery(graphql`
    query BannerQuery {
            file(relativePath: {eq: "banner-hero-img.png"}) {
                childImageSharp {
                    fluid(fit: CONTAIN, traceSVG: {color: "#e68590"}, maxHeight: 200) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    }
                }
            }
        }
    `)
    return data.file
}

export default useHeroImage;