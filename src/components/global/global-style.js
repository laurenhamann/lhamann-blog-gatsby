import { clamps } from './clamps'

const globalStyles = `
    * {
        box-sizing: border-box;
        margin-top: 0;
    }
    body {
        margin: ${clamps.marginTop} ${clamps.marginLeft} ${clamps.marginBottom} ${clamps.marginRight};
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