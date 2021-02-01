import styled from '@emotion/styled'
import { margin, clamps, flex } from '../../../global/global'
const ProjectSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    .grid-project {
        ${flex.flexRow}
        width: ${clamps.projectPreviewWidth};
        ${flex.justifyCenter}
        ${margin.center}
    }

`

export default ProjectSectionStyle;