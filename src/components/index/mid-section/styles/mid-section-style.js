import styled from '@emotion/styled'
import { margin, flex, clamps } from '../../../global/global';

const MidSectionStyle = styled('div')`
    ${flex.flexCol}
    ${flex.alignItemsCenter}
    > .page-links {
        ${margin.center}
        margin-bottom: ${clamps.medMargin};
    }

    
`

export default MidSectionStyle