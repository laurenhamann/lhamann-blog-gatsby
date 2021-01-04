import styled from '@emotion/styled';

const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const PreviewLinks = styled('div') `
    align-items: center;
    justify-content: space-around;
    ${mq[0]} {
        justify-content: center;
    }
    width: 80vw;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    .page-links{
        /*  index page project and blog links */
        color: #516684;
        ${mq[0]} {
            font-size: 1.6em;
            margin:auto 4vw;
        }  
        ${mq[1]} {
            margin:auto 6vw;
        }                 
        ${mq[3]} {
            font-size: 2em;
            margin:auto 10vw;
        }
    }

`

export default PreviewLinks;