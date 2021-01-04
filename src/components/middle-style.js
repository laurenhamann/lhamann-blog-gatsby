import styled from '@emotion/styled';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const MiddleStyle = styled('section') `
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
    align-items: center;
    box-shadow: 0 -1px 8px 0 #4b4b4b, 0 2px 8px 0 #4b4b4b;
    ${mq[1]} {
        &:hover {
            h1 {
                color: #db777c;
            }
        }
    }
    ${mq[2]} {
        min-height: auto;
        height: 40vh;
        padding: 5vh;
        flex-direction: row;
        justify-content: space-between;
    }
    & h1 {
        color: #000;
        transition: color 1s;
        ${mq[2]} {
            font-size: 10em;
            margin-top: -1vh;
            margin-left: 6vw;
            margin-right: -8vw;
            align-self: flex-start;
        }
    }

    & ul {
        ${mq[2]} {
            margin-left: -20vw;
            align-self: flex-end;
        }
        .mid-li {
            color: #000;
            font-family: 'modern';
            font-size: .75em;
            text-align: left;
            list-style: none;
            padding-bottom: 0.5vh;
            ${mq[0]} {
                font-size: 0.9em;
            }
            ${mq[1]} {
                font-size: 1em;
            }
            ${mq[1]} {
                font-size: 1.2em;
            }
            ${mq[1]} {
                font-size: 1.5em;
            }
            
        }
        .mid-li:before {
            /* adding dashes before each li for quick facts */
            content: " - ";
        }
    }
    .special-link {
        /* special link styling for middle section on index page*/
        color: #516684;
        font-family: 'lemonmilk';
        font-size: 0.65em;
        ${mq[2]} {
            font-size: 0.9em;
        }
    }
    .load-link {
        color:#FBC3BC;
        ${mq[2]} {
            font-size: 1em;
        }
    }
`;

export default MiddleStyle;