import styled from '@emotion/styled'
import { clamps } from '../../../global/clamps'
import { flex } from '../../../global/flex-box';
import { margin } from '../../../global/margin';

const MidSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    > .page-links {
        ${margin.center}
        margin-bottom: ${clamps.medMargin};
    }

    
`

export default MidSectionStyle