import styled from '@emotion/styled'
import { clamps, margin, flex } from '../../global/global'
const HubStyle = styled('section') `
    width:${clamps.gridSectionWidth};
    ${margin.center}
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    .grid-div {
        ${flex.flexRow}
        flex-wrap: wrap;
    }
`

export default HubStyle;