import styled from '@emotion/styled';

const pink = '#FBC3BC';
const navy = '#516684';
const grey = '#a2aebf';
const dkPink = '#db777c';
const black = '#000';
const white = '#fbfafb';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const GridStyle = styled('section')`
    display: flex;
    flex-direction: column;
    padding: 1vmin;
    min-height: 60vh;
    h1{
        font-size: 3em;
        text-align: center;
        margin: 2vh auto 0 auto;
        ${mq[0]} {
            font-size: 4em;
        }
    }
    button {
        outline: none;
        border: none;
        width: 25vw;
        heigth: 5vh;
        margin: 1vh auto;
        background-color: ${pink};
        border-radius: 10px;
        font-family: Lato;
        font-weight: 400;
        font-size: 0.6em;
        box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
        ${mq[0]} {
            width: 15vw;
            font-size: 1em;
        }
    }
    article {
        width: 90%;
        ${mq[0]} {
            flex-direction: column;
            flex-wrap: wrap;
            width: 30%;
        }
        ${mq[2]} {
            width: 22%;
        }

        & a {
            ${mq[0]} {
                width: 150px;
                margin: 0.5vh auto;
                padding: 0;
            }
            ${mq[1]} {
                width: 250px;
            }
            ${mq[3]} {
                width: 300px;
            }
        }
        .article-div{
            width: 100%;
            ${mq[0]} {
                width: 150px;
                margin-left: 0;
            }
            ${mq[1]} {
                width: 250px;
            }
            ${mq[3]} {
                width: 300px;
            }
            h3 a {
                font-size: 0.8em;
                ${mq[1]} {
                    font-size: 1.2em;
                }
            }
            .author-span{
                font-size: 0.4em;
                ${mq[1]} {
                    font-size: 0.9em;
                }
            }
            p {
                font-size: 0.6em;
                ${mq[1]} {
                    font-size: 1em;
                }
                ${mq[3]} {
                    font-size: 1.2em;
                }
            }
            a {
                text-align: right;
                font-size: 0.4em;
                ${mq[0]} {
                    text-align: center;
                    padding: 0;
                    margin-top: 0;
                }
                ${mq[1]} {
                    font-size: 0.9em;
                }
                ${mq[3]} {
                    font-size: 1em;
                }
            }   
        }
    }
`;

export default GridStyle;