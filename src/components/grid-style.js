import styled from '@emotion/styled';

const pink = '#FBC3BC';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const GridStyle = styled('section')`
    display: flex;
    flex-direction: column;
    padding: 4vmax;
    min-height: 60vh;

    div {
        display: flex;
        flex-direction: column;
        align-content: center;
        ${mq[1]}{
            flex-direction: row;
            justify-content: center;
        }
    }
    h1{
        text-align: center;
        margin: 2vh auto 0 auto;
        ${mq[1]} {
            margin: 2vh 2vw 0 auto;
        }
    }
    button {
        outline: none;
        border: none;
        width: 15vmin;
        height: auto;
        margin: 1vh auto;
        background-color: ${pink};
        border-radius: 10px;
        font-family: Lato;
        font-weight: 400;
        font-size: 15px;
        box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
        ${mq[0]} {
            width: 15vmin;
        }
        ${mq[1]} {
            font-size: 18px;
            margin: 2vh auto 0 2vw;
            align-self: center;
            width: 10vw;
        }
        ${mq[3]} {
            width: 7vw;
        }
    }
    .grid-div{
        display: flex;
        flex-direction: column;
        margin-top: 5%;
        ${mq[0]}{
            flex-direction: row;

        }
    }
    article {
        width: 90%;
        margin: 0 auto;
        ${mq[0]} {
            flex-direction: column;
            flex-wrap: wrap;
            width: 50%;
        }

        & a {
            width: 40%;
            ${mq[0]} {
                width: 50%;
                margin: 0.5vh auto;
                padding: 0;
            }
        }
        .article-div{
            text-align: center;
            ${mq[0]}{
                width: 90%;
                p {
                    margin: 0 auto;
                }
            }
            a {
                text-align: right;
                ${mq[0]} {
                    text-align: center;
                    padding: 0;
                    margin-top: 0;
                }
            }   
        }
    }
`;

export default GridStyle;