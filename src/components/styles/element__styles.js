import { clamps } from './global'
import { colors, margin } from './styles*'
const primaryButton =`
    width: ${clamps.prim_btn};
    ${margin.center}
    color: ${colors.dark_neutral};
    border-radius: 10px;
    transition: all 1s;
    outline: none;
    border: none;
    &:hover, 
    :focus {
        background-color: ${colors.main_bold};
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
        border-radius: 15px;
        color: ${colors.light_neutral};
        font-weight: 600;
        cursor: pointer;
    }

`
const positionBtn =`
    position: absolute;
    top: 24px;
    right: 10px;
`

const secondaryBtn =`
    width: ${clamps.secondary_btn};
    color: ${colors.accent};
    background-color: ${colors.light_neutral};
    margin: ${clamps.xs_margin} ${clamps.xs_margin} ${clamps.xs_margin} auto !important;
    z-index: 14;
`

const elements = `
    #submit-btn,
    button {
        ${primaryButton}
    }

    .animate-filter {
        ${secondaryBtn}
    }
    .filter {
        ${positionBtn}
        margin: ${clamps.xs_margin} ${clamps.xs_margin} ${clamps.xs_margin} auto !important;
    }

`


export default elements