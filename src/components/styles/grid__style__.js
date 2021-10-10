import styled from '@emotion/styled'
import { clamps } from './global'
import { flex } from './styles*'
const GridStyle = styled('article') `
    width: ${clamps.grid_inner_div_width};
    ${flex.flexCol};
    margin: ${clamps.med_margin};
    h4.title {
        margin-bottom: ${clamps.xs_margin};
        text-align: left;
    }
    span {
        margin-bottom: ${clamps.med_margin};
    }
`

export default GridStyle;