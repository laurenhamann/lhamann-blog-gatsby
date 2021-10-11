import styled from '@emotion/styled'
import { clamps, margin, flex  } from './global'

const HubStyle = styled('section') `
    width:${clamps.grid_section_width};
    ${margin.center}
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    min-height: 80vh;
    height: auto;
    .filter {
        ${flex.flexRow}
        button {
            height: 2vw;
            margin-left: 10vw;
        }
    }
    .tags {
        ${flex.flexRow}
        flex-wrap: wrap;
        ${flex.justifySA}
    }
    .grid-div {
        ${flex.flexRow}
        flex-wrap: wrap;
    }
`

export default HubStyle;