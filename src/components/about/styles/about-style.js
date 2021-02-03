import styled from '@emotion/styled'
import { margin, clamps, flex, animation } from '../../global/global'
const AboutStyle = styled('div')`
    ${animation.strokeChange}
    ${margin.center}
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
    width: ${clamps.headerWidth};
    .svg-border {
            width: ${clamps.fullSizeImage};
            ${margin.center}
        svg{
            #Line-4 {
                animation: 
                    strokeChange 2s forwards infinite,
                    dash 9s 4s 1 forwards;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
            }
        }
    }
    .about-title {
        ${flex.flexCol}
        width:${clamps.aboutTitleWidth};
        padding: 0 ${clamps.medMargin};
        ${margin.center}
    }
    .about-font-span {
        animation: colorChange 4s forwards infinite;
        align-self: flex-start;
    }
    & .gatsby-image-wrapper {
        border-radius: 50%;
        height: ${clamps.fullSizeImage};
        width: ${clamps.fullSizeImage};
        margin: 3vh auto;
    }

    p {
        width: ${clamps.articleWidth};
        ${margin.center}
    }

`

export default AboutStyle;