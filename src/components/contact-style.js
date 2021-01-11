import styled from '@emotion/styled';

const pink = '#FBC3BC';
const navy = '#516684';
//const grey = '#a2aebf';
const dkPink = '#db777c';
const black = '#000';
//const offWhite = '#fbfafb';
const white = '#fff';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const ContactStyle = styled('section')`
        text-align: center;
        min-height: 60vh;
        height: auto;
        padding: 3vh;
        ${mq[1]} {
            &:hover {
                h1 {
                    color: ${dkPink};
                }
                h4 {
                    color: ${navy};
                }
            }
        }

    & h1{
        color: ${black};
        margin-bottom: 0;
        transition: color 1s;
    }

    & h4 {
        color: ${black};
        transition: color 1s;
        padding-bottom: 5vh;
    }

    #contact-form {
        margin-top: 2vh;
        height: auto;
        padding: 2vmin;
        background-color: ${navy};
        box-shadow: inset 0 0 10px rgb(75, 75, 75),
                    inset -1px -1px 10px rgb(75, 75, 75);
        ${mq[0]} {
            width: 80vw;
            margin: 2vh auto;
        }
        ${mq[1]} {
            width: 60vw;
        }
        ${mq[2]} {
            min-height: auto;
            height: 75vh;
            width: 60vw;
            justify-content: center;
            align-items: center;
        }
    }
    #contact-form label {
        display: flex;
        flex-direction: column;
        margin: 1vh auto;
        font-family: 'modern';
        font-size: 1.9vmax;
        color: #fff;
        ${mq[1]}{
            font-size: 1.5vmax;
        }
    }

    #contact-form label:focus-within{
        color: ${pink};
        font-size: 2vmax;
        ${mq[2]} {
            font-size: 1.7vmax;
        }
    }

    #contact-form label input:focus,
    #contact-form label textarea:focus{
        color: ${dkPink};
        font-size: inherit;
        outline: ${pink};
        border: 3px solid ${pink};
    }

    #contact-form label input{
        margin-top: 0.5vh;
        min-width: 150px;
        width: 50vw;
        max-width: 400px;
        min-height: 25px;
        height: 4.5vh;
        max-height: 45px;
        border: none;
        box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
        font-size: inherit;
    }

    #contact-form label textarea{
        box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
        width: 65vw;
        max-width: 500px;
        min-height: 15vh;
        margin: 2vh auto;
        font-size: inherit;
    }

    #submit-btn{
        max-width: 300px;
        min-height: 25px;
        margin: 1vh auto;
        border-radius: 10px;
        outline: none;
        border: 2px solid ${pink};
        box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.5);
        background-color: ${pink}e6;
        font-family: 'Lato';
        font-weight: 400;
        text-shadow: 1px 1px 2.5px rgba(50, 50, 50);
        color: ${white};
        width: 20vmin;
        font-size: 1.6vmax;
        height: 5vmin;
    }
    #submit-btn:hover {
        background-color: ${white};
        color: ${pink};
        text-shadow: none;
    }



`;

export default ContactStyle;

