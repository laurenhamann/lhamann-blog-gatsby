import styled from '@emotion/styled';
import { flex } from '../../../global/flex-box'
import { clamps } from '../../../global/clamps'

const RecentBlogsStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}

    article:last-child {
        margin-bottom: ${clamps.marginBottom};
    }
    .page-links {
        margin-bottom: ${clamps.marginBottom};
    }
`
export default RecentBlogsStyle;