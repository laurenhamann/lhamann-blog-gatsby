import { margin } from './spacing'

const globalStyles = `
    * {
        box-sizing: border-box;
        margin-top: 0;
    }
    body {
        margin-top: clamp(${margin.marginTB.min}, ${margin.marginTB.pef}, ${margin.marginTB.max});
        margin-bottom: clamp(${margin.marginTB.min}, ${margin.marginTB.pef}, ${margin.marginTB.max});
        margin-left: clamp(${margin.marginRL.min}, ${margin.marginRL.pef}, ${margin.marginRL.max});
        margin-right: clamp(${margin.marginRL.min}, ${margin.marginRL.pef}, ${margin.marginRL.max});
    }
    ul li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`

export default globalStyles;