import styled from '@emotion/styled'
import { clamps, flex } from '../../Global/Styles/__global'

const GridStyle = styled('article') `
    width: ${clamps.grid_inner_div_width};
    ${flex.flexCol};
    margin: ${clamps.med_margin};
    h4.title {
        margin-bottom: ${clamps.xs_margin};
        text-align: left;
    }
    span {
        margin-bottom: ${clamps.xs_margin};
        font-size: ${clamps.span_size};
    }
    .article-div {
        ${flex.flexCol}
        ${flex.justifyCenter}
    }
    div a {
        align-self: center;
    }
`

export default GridStyle;