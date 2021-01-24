import styled from '@emotion/styled'
import { clamps } from '../../../global/clamps'
import { flex } from '../../../global/flex-box';

const MidSectionStyle = styled('div')`
    ${flex.flexCol}

    > .page-links {
        margin-right: auto;
        margin-left: auto;
        margin-bottom: ${clamps.medMargin};
    }

    
`

export default MidSectionStyle