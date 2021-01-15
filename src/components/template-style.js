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
    ${mq[2]}{
        border-radius: 18px;
    }
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
        & .author-span {
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
        h3{
            padding-bottom: 2vh;
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
            width: 80%;
            margin: 1vh auto;
            text-align: left;
            ${mq[1]} {
                padding: 3vh 2vw 0 2vw;
            }
            ${mq[2]} {
                padding: 3vh 6vw 0 6vw;
            }
            ${mq[3]} {
                padding: 3vh 1vw 0 1vw;
            }
        }
        a img{
            ${mq[2]} {
                margin: 0;
                padding: 0;
            }
            ${mq[3]} {
                max-width: 900px;
            }
        }
        a{
            color: ${navy};
        }
        .load-link{
            text-align: left;
            padding: 2.5vh;
            color: ${navy};
            .arrow-pink{
                color: ${pink};
            }
        }
        p code {
            background-color: #00000009;
            padding: 3px;
            border-radius: 3px;
            color: ${grey};
        }
    }
`;


export default TemplateStyle;