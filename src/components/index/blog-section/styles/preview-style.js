import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box';
import { clamps } from '../../../global/clamps'

const PreviewStyle = styled('article')`
    ${flex.flexRow}
    > a {
        width: 40%;
        margin-right: ${clamps.marginRight};
    }
    .article-div {
        ${flex.flexCol}
        width: 55%;
        > * {
            margin-bottom: ${clamps.xsMargin};
        }
    }

`


export default PreviewStyle;