import styled from '@emotion/styled';
import { clamps, flex } from '../../../global/global'

const RecentBlogsStyle = styled('div')`
    ${flex.flexCol}
    ${flex.justifyCenter}

    article:last-child,
    .page-links {
        margin-bottom: ${clamps.marginBottom};
    }
`
export default RecentBlogsStyle;