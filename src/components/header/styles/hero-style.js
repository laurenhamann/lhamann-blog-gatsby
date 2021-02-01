import styled from '@emotion/styled'
import { margin, clamps, flex } from '../../global/global';

const HeroStyle = styled('div')`
    align-self: center;
    min-width: auto;
    ${margin.center}
    height: ${clamps.heroBannerHeight};
    ${flex.flexRow}
    ${flex.justifyCenter}
    >div.rainbow-svg {
        width: ${clamps.heroBannerWidth};
        height: auto;
    }

    .intro {
        ${props => props.width > 768 ? 
        `margin-left: ${clamps.medMargin};
        margin-top: ${clamps.marginTop};` 
        : 
        `margin: 0;`}
        align-self: center;
    }
`

export default HeroStyle;