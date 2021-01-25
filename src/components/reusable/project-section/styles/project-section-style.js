import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box'
import { clamps } from '../../../global/clamps'
import { margin } from '../../../global/margin'

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