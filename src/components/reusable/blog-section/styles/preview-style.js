import styled from '@emotion/styled'

import { margin, clamps, flex } from '../../../global/global'
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