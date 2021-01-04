import styled from '@emotion/styled';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const FooterStyle = styled('section')`
    display: flex; 
    flex-direction: column;
    text-align: center; 
    justify-content: center;
    ${mq[1]} {
        &:hover {
            h1 {
                color: #db777c;
            }
        }
    }
    ${mq[2]} {
            height: 35vh;
        }
    & h1 {
        color: #000;
        transition: color 1s;
        ${mq[2]} {
            font-size: 8em;
            padding-bottom: 1.5vh;
        }
    } 

    & h2 {
        ${mq[2]} {
            font-size: 2em;
            padding-bottom: 1vh;
        }
    }
    & .social-links {
        display: flex;
        flex-direction: row;
        justify-content: center;   
        margin-bottom: 3vh;
        a{
            margin-right: 2vw;
            ${mq[2]} {
                font-size: 4vh;
                padding-bottom: -3.5vh;
            }
        }
    }
    .svg-inline--fa path {
        fill: #FBC3BC;
    }
`;

export default FooterStyle;