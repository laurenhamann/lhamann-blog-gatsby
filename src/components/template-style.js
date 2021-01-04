import styled from '@emotion/styled';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
//figure out MDXProvider for custom classes to select only the p elements that do not have a child of img
const pink = '#FBC3BC';
const navy = '#516684';
const grey = '#a2aebf';

const TemplateStyle = styled('section')`
    .article-flex {
        padding-top: 5vh;
        justify-content: center;
        text-align: center;
        h1 {
            font-size: 5em;
            ${mq[0]} {
                font-size: 5.5em;
            }
            ${mq[1]} {
                margin-bottom: 1vh;
                font-size: 7em;
            }
            ${mq[3]} {
                margin-bottom: 1vh;
                font-size: 10em;
            }
        }
        & span {
            font-size: 0.70em;
            color: #000000e6;
            font-family: Lato;
            font-weight: 400;
            ${mq[0]} {
                font-size: 1em;
            }
            ${mq[1]} {
                font-size: 1.2em;
            }
        }
        p,
        h3 {
            padding-top: 3vh;
        }
        h3{
            ${mq[1]} {
                font-size: 2.5em;
            }
            ${mq[3]} {
                font-size: 3.5em;
            }
        }

        p{
            ${mq[1]} {
                font-size: 1.5em;
                padding: 3vh 2vw 0 2vw;
            }
            ${mq[2]} {
                padding: 3vh 6vw 0 6vw;
            }
            ${mq[3]} {
                font-size: 2em;
                padding: 3vh 15vw 0 15vw;
            }
        }
        a{
            text-align: left;
            font-size: 1em;
            padding: 2.5vh;
            color: ${navy};
            ${mq[1]} {
                font-size: 1.2em;
            }
            .arrow-pink{
                color: ${pink};
            }
        }
    }
`;


export default TemplateStyle;