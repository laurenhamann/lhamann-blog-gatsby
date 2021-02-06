import { clamps, colors, margin } from '../global'

const primaryButton =`
    width: ${clamps.primBtn};
    ${margin.center}
    color: ${colors.darkNeutral};
    border-radius: 10px;
    transition: all 1s;
    outline: none;
    border: none;
    &:hover, 
    :focus {
        background-color: ${colors.mainBold};
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
        border-radius: 15px;
        color: ${colors.lightNeutral};
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
    width: ${clamps.secondaryBtn};
    color: ${colors.accent};
    background-color: ${colors.lightNeutral};
    margin: ${clamps.xsMargin} ${clamps.xsMargin} ${clamps.xsMargin} auto !important;
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
        margin: ${clamps.xsMargin} ${clamps.xsMargin} ${clamps.xsMargin} auto !important;
    }

`


export default elements