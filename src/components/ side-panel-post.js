import React from 'react';
import styled from '@emotion/styled'
import { graphql, Link} from 'gatsby'
import Img from 'gatsby-image';


export const query = graphql`
    query imageQuery {
        file(relativePath: {eq: "about-picture.JPG"}) {
            childImageSharp {
                fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    sizes
                    src
                    aspectRatio
                }
            }
        }
    }
`;

export const PanelStyle = styled('aside')`





`



const SidePanel = props => (
    <PanelStyle>
        <button>!!</button>
        <div>
            <Img fluid={file.childImageSharp.fluid} alt="family" />
            {/* add my quick facts */}
            {/* link to about me */}
            {/* other related blogs */}
            {/* other categories */}
            {/* social links */}
        </div>
    </PanelStyle>
)

export default SidePanel;