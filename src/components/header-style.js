import styled from '@emotion/styled';

const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const HeaderStyle = styled('header')`
    width: 100vw;
    > div {
        width:80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .logo{
        width: 50%;
        margin: 1%;
        ${mq[1]}{
            width: 40%;
        }
    }
`;


export default HeaderStyle;
