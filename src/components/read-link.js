import styled from '@emotion/styled';
import { Link } from 'gatsby';
const breakpoints = [768, 1024, 1400, 1600]

const ReadLink = styled(Link)`
        color: #db777c;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 300;
        align-self: flex-end;
        text-align: left;
        padding-top: 3vh;
        width: auto;
`;

export default ReadLink;