import styled from '@emotion/styled';
import { flex } from '../../global/flex-box';
const HeaderStyle = styled('header')`
    ${flex.flexCol}
    > div {
        ${flex.flexRow}
        ${flex.justifySB}
    }
    .hero {
        align-self: center;
        .intro {
            margin: 0;
        }
    }


`
export default HeaderStyle