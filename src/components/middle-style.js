import styled from '@emotion/styled';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const pink = '#FBC3BC';
const navy = '#516684';
//const grey = '#a2aebf';
const dkPink = '#db777c';
const black = '#000';

const MiddleStyle = styled('section') `
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
    align-items: center;
    ${mq[1]} {
        &:hover {
            h1 {
                color: ${dkPink};
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
        color: ${black};
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
            color: ${black};
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
        color: ${navy};
        font-family: 'lemonmilk';
        font-size: 0.65em;
        ${mq[2]} {
            font-size: 0.9em;
        }
    }
    .load-link {
        color:${pink};
        ${mq[2]} {
            font-size: 1em;
        }
    }
`;

export default MiddleStyle;