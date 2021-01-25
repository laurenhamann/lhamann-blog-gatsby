import styled from '@emotion/styled';
import { flex } from '../../global/flex-box';
import { clamps } from '../../global/clamps';
import { margin } from '../../global/margin';

const HeaderStyle = styled('header')`
    ${flex.flexCol}
    width: ${clamps.headerWidth};
    ${margin.center}
    > div.nav {
        ${flex.flexRow}
        ${flex.justifySB}
    }
`
export default HeaderStyle