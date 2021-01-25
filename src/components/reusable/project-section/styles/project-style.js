import styled from '@emotion/styled'
import { clamps } from '../../../global/clamps'
import { flex } from '../../../global/flex-box'

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