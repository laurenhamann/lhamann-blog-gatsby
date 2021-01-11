import styled from '@emotion/styled';
// const pink = '#FBC3BC';
// const navy = '#516684';
// const grey = '#a2aebf';
const dkPink = '#db777c';
// const black = '#000';

const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const AboutPage = styled('section')`
    ${mq[1]} {
        &:hover{
            .about-font-span{
                color: ${dkPink};
            }
        }
    }
    padding: 3vh;
    display: flex;
    flex-direction: column;
    margin: 2vh auto;
    width: 100vw;
    align-items: center;
    & h2 {
        & span {
            font-size: 4.5vmax;
            font-family: 'Lato';
            font-weight: 200;
            align-self: flex-start;
            margin-left: -5vw;
            ${mq[0]} {
                margin-left: -8vw;
            }
            ${mq[1]} {
                font-size: 5.5vmax;
            }
        }
    }
    & .gatsby-image-wrapper {
        border-radius: 50%;
        height:250px;
        width: 300px;
        margin: 3vh auto;
        ${mq[0]} {
            height: 300px;
            width: 350px;
            margin: 3vh auto 1vh auto;
        }
        ${mq[1]} {
            height: 400px;
            width: 450px;
        }
    }
    p   {
        text-align: left;
        width: 80vw;
        margin-top: 2vh;
        margin-left: 2vw;
        align-item: flex-start;
        ${mq[0]} {
            width: 450px;
        }
        ${mq[1]} {
            width: 550px;
        }
        ${mq[2]} {
            width: 60vw;
            padding-bottom: 2vh;
        }
    }
    .about-font-span{
        text-align: left;
        color: #000;
        transition: color 1s;
    }
`;

export default AboutPage;