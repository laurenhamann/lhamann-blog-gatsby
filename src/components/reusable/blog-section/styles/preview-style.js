import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box';
import { clamps } from '../../../global/clamps'
import { margin } from '../../../global/margin';

const PreviewStyle = styled('article')`
    ${flex.flexRow}
    ${flex.alignItemsCenter}
    ${flex.justifyCenter}
    ${margin.center}
    width: ${clamps.blogPreviewWidth};
    
    > a {
        width: ${clamps.blogImageDivWidth};
        margin-right: ${clamps.marginRight};
    }
    .article-div {
        ${flex.flexCol}
        width: ${clamps.articleDivWidth};
        > * {
            margin-bottom: ${clamps.xsMargin};
            text-align: left !important;
        }
    }

`


export default PreviewStyle;