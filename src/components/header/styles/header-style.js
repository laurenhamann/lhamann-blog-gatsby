import styled from '@emotion/styled';
import { margin, clamps, flex } from '../../global/global';

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