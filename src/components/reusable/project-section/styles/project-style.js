import styled from '@emotion/styled'
import { flex, clamps } from '../../../global/global'
const ProjectStyle = styled('article')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    ${flex.alignItemsCenter}
    height: auto;
    width: ${clamps.projectPreviewDivWidth};
    a:nth-child(2){
        width: 100%;
    }
    > * {
        margin-bottom: ${clamps.xsMargin};
        align-self: center;
    }


`

export default ProjectStyle;