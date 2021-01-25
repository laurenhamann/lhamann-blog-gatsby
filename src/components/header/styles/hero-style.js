import styled from '@emotion/styled'
import { flex } from '../../global/flex-box'
import { clamps } from '../../global/clamps'
import { margin } from '../../global/margin';

const HeroStyle = styled('div')`
    align-self: center;
    min-width: auto;
    ${margin.center}
    height: ${clamps.heroBannerHeight};
    ${flex.flexRow}
    ${flex.justifyCenter}
    >div.gatsby-image-wrapper {
        width: ${clamps.heroBannerWidth};
        height: auto;
    }
    .intro {
        ${props => props.width > 768 ? 
        `margin-right: ${clamps.xsMargin};
        margin-top: ${clamps.marginTop};` 
        : 
        `margin: 0;`}
        align-self: center;
    }
`

export default HeroStyle;