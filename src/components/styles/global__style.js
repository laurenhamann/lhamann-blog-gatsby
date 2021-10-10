import { clamps, typographyStyles, elements } from './global'
import { animation, colors } from './styles*'
const globalStyles = `
    ${animation.colorChange}
    ${animation.pastelRainbow}

    ${typographyStyles}
    ${elements}
    * {
        box-sizing: border-box;
        margin-top: 0;
    }
    html,
    body {
        background-color: ${colors.light_neutral};
        max-width: 100vw;
    }
    body {
        margin: ${clamps.margin_top} 0 ${clamps.margin_bottom} 0;
    }
    ul li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    div>ul>li::before {
        content:"\\2022";
        animation-name: colorChange;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
`

export default globalStyles;