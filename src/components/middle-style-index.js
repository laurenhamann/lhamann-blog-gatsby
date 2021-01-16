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
    margin: 5vh auto;
    align-items: center;
    ${mq[1]} {
        &:hover {
            h1 {
                color: ${dkPink};
            }
        }
    }
    ${mq[3]}{
        border-radius: 18px;
    }

    .mid-div{
        width: 80%;
        padding: 3% 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & h1 {
        color: ${black};
        transition: color 1s;
        width: auto;
        align-self: center;
        margin-bottom: 0;
    }

    & ul {
        width: auto;
        align-self: center;
        padding-left: 0;
        .mid-li {
            color: ${black};
            font-family: 'Lato';
            font-weight: 200;
            font-size: 2vmax;
            text-align: left;
            list-style: none;
            padding-bottom: 0.5vh; 
            ${mq[1]}{
                font-size: 1.7vmax;
            }
            ${mq[3]}{
                font-size: 20px;
            }
        }
        .mid-li:before {
            /* adding dashes before each li for quick facts */
            content: " - ";
        }
    }
    a {
        padding: 2% 0;
        width: auto;
        align-self: center;
    }
    .special-link {
        /* special link styling for middle section on index page*/
        color: ${navy};
        font-family: 'lemonmilk';
    }
    .load-link {
        color:${pink};
        margin-right: 1vw;
    }
`;

export default MiddleStyle;