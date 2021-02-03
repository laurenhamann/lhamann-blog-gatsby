import styled from '@emotion/styled'
import { clamps, margin, flex } from '../../global/global'
const AllBlogStyle = styled('section') `
    width:${clamps.gridDivWidth};
    ${margin.center}
    ${flex.flexCol}
    ${flex.alignItemsCenter}

    button {
        margin: 0 ${clamps.marginBottom}${clamps.medMargin} auto;
    }
`

export default AllBlogStyle;