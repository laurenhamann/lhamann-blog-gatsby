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
    height: auto;
    ${mq[1]} {
        &:hover {
            h1 {
                color: #db777c;
            }
        }
    }
    & h1 {
        color: #000;
        transition: color 1s;
        margin-bottom: 0;
        ${mq[2]} {
            margin-bottom: 1vh;
        }
    } 

    & h4 {
        padding-bottom: 3vh;
        ${mq[1]} {
            padding-bottom: 1.5vh;
        }
        ${mq[2]} {
            padding-bottom: 6vh;
        }
    }
    & .social-links {
        display: flex;
        flex-direction: row;
        justify-content: center;   
        margin-bottom: 3vh;
        a{
            margin-right: 2vw;
            font-size: 3.5vmin;
            ${mq[0]} {
                padding-bottom: -3.5vh;
            }
            ${mq[1]} {
                font-size: 4vmin;
            }
            ${mq[2]} {
                font-size: 5.5vmin;
            }
            ${mq[3]} {
                font-size: 6vmin;
            }
        }
    }
    .svg-inline--fa path {
        fill: #FBC3BC;
    }
`;

export default FooterStyle;