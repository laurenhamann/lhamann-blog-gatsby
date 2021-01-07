import styled from '@emotion/styled';
import { Link } from 'gatsby';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
)
const ReadLink = styled(Link)`
        color: #db777c;
        font-size: 0.85em;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 300;
        align-self: flex-end;
        padding-top: 3vh;
        ${mq[0]} {
                font-size: 1em;
        }
        ${mq[2]} {
                font-size: 1.2em;
        }
`;

export default ReadLink;