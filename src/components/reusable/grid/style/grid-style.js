import styled from '@emotion/styled'
import { clamps, flex } from '../../../global/global'

const GridStyle = styled('article') `
    width: ${clamps.gridInnerDivWidth};
    ${flex.flexCol};
    h4.title {
        margin-bottom: ${clamps.xsMargin};
        text-align: left;
    }
    span {
        margin-bottom: ${clamps.medMargin};
    }
`

export default GridStyle;