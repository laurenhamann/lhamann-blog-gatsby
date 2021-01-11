import styled from '@emotion/styled';

const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const PreviewLinks = styled('div') `
    align-items: center;
    justify-content: center;
    ${mq[0]} {
        justify-content: center;
    }
    width: 80%;
    padding: 0 0 1.5% 0;
    margin: 0 auto;
    .page-links{
        /*  index page project and blog links */
        color: #516684;
        font-size: 2vmax;
        margin:auto 10%;   
        ${mq[1]} {
            font-size: 1.5vmax;
        }               
    }

`

export default PreviewLinks;