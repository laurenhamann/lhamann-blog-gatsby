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
            ${mq[1]} {
                margin-bottom: 1vh;
            }
            ${mq[3]} {
                margin-bottom: 1vh;
            }
        }
        & span {
            color: ${grey};
            font-family: Lato;
            font-weight: 400;
            font-style: italic;
        }
        & .token {
            font-family: 'Source Code Pro', Courier, monospace;
            font-size: 1.4vmax;
        }
        p,
        h3 {
            padding-top: 3vh;
        }
        ul {
            width: 80vw;
            margin: 1vh auto;
            ${mq[1]}{
                width: 30vw;
            }
            li {
                text-align: left;
                width: 20vw;
            }
        }
        hr {
            margin: 2vh 0;
        }
        p{
            width: 80vw;
            margin: 1vh auto;
            ${mq[1]} {
                padding: 3vh 2vw 0 2vw;
                width: 50vw;
            }
            ${mq[2]} {
                padding: 3vh 6vw 0 6vw;
            }
            ${mq[3]} {
                padding: 3vh 15vw 0 15vw;
            }
        }
        a{
            text-align: left;
            padding: 2.5vh;
            color: ${navy};
            ${mq[2]} {
                padding-left: 10vh;
            }
            .arrow-pink{
                color: ${pink};
            }
        }
        p code {
            background-color: #00000009;
            padding: 3px;
            border-radius: 3px;
            color: ${grey};
            font-size: 1.5vmax;
            ${mq[1]} {
                font-size: 1.4vmax;
            }
        }
    }
`;


export default TemplateStyle;