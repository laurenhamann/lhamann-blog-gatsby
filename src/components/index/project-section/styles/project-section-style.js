import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box'


const ProjectSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}
    .grid-project {
        ${flex.flexRow}
        width: auto;
        ${flex.justifyCenter}
    }

`

export default ProjectSectionStyle;